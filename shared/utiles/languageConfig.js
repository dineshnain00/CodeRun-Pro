export const languageConfig = {
  js: {
    extension: "js",
    run: (file) => `node ${file}`,
  },
  py: {
    extension: "py",
    run: (file) => `python3 ${file}`,
  },
  cpp: {
    extension: "cpp",
    run: (file) => `g++ ${file} -o /tmp/a.out && /tmp/a.out`,
  },
};
