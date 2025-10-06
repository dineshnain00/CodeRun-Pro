const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/run", (req, res) => {
  const { code, language } = req.body;
  const filename = `code.${languageConfig[language].extension}`;
  const filePath = path.join(__dirname, filename);
  const fs = require("fs");

  fs.writeFileSync(filePath, code);

  const cmd = languageConfig[language].runCommand.replace("{file}", filePath);
  exec(cmd, (error, stdout, stderr) => {
    if (error) return res.json({ error: stderr || error.message });
    res.json({ output: stdout });
  });
});

const languageConfig = require("../shared/utils/languageConfig");
app.listen(5000, () => console.log("⚙️ Backend running on port 5000"));
