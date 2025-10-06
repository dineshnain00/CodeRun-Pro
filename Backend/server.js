const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.json());

app.post('/run', (req, res) => {
  const { language, code } = req.body;
  const fileName = `temp.${language}`;
  const fs = require('fs');
  fs.writeFileSync(fileName, code);

  exec(`docker run --rm -v $(pwd):/code mycompilerimage ./run_code.sh ${language} /code/${fileName}`, (err, stdout, stderr) => {
    if (err) {
      res.status(500).send(stderr);
      return;
    }
    res.send(stdout);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
