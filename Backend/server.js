import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { exec } from "child_process";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Compile Code Endpoint
app.post("/run", async (req, res) => {
  const { code, language } = req.body;
  const id = uuidv4();
  const fileName = `/tmp/${id}.${languageConfig[language].extension}`;
  const command = languageConfig[language].run(fileName);

  try {
    await fs.promises.writeFile(fileName, code);
    exec(command, (err, stdout, stderr) => {
      if (err) return res.json({ error: stderr });
      res.json({ output: stdout });
    });
  } catch (error) {
    res.status(500).json({ error: "Execution failed" });
  }
});

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
