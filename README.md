CodeRun Pro 🖥️📱

CodeRun Pro is a cross-platform code editor and compiler that allows users to write, run, and debug code in multiple programming languages offline, with AI-driven code suggestions. It works on Windows, macOS, Android, and iOS.


---

Features

Multi-language support: Python, C/C++, Java, Node.js (expandable)

Offline compilation with preinstalled libraries

Secure Docker sandbox for safe code execution

AI-powered code suggestions and optimizations

Cross-platform: React Native (mobile) + Electron (desktop)

Multi-file project support

Syntax highlighting, auto-completion, and terminal output



---

Tech Stack

Frontend: React Native, Electron, Monaco Editor

Backend: Node.js + Express + Docker sandbox

AI Integration: OpenAI API (for code suggestions)

Languages Supported: Python, C/C++, Java, Node.js



---

Project Structure

code-run-pro/
├── backend/                  # Node.js backend + Docker sandbox
│   ├── server.js
│   ├── sandbox/
│       ├── Dockerfile
│       └── run_sandbox.sh
├── desktop/                  # Electron desktop app
│   ├── main.js
│   └── renderer/
│       ├── App.jsx
│       └── components/
├── mobile/                   # React Native mobile app
│   ├── App.js
│   └── screens/
├── shared/                   # Shared utilities
│   └── utils/
│       └── languageConfig.js
└── README.md


---

Getting Started

1. Backend Setup

1. Install dependencies:



cd backend
npm install express body-parser

2. Build the Docker image:



cd sandbox
docker build -t code-run-pro-sandbox .

3. Run the backend server:



cd ..
node server.js


---

2. Desktop App (Electron)

1. Navigate to desktop folder and install dependencies:



cd desktop
npm install electron react react-dom

2. Run the Electron app:



npx electron .


---

3. Mobile App (React Native)

1. Navigate to mobile folder:



cd mobile
npm install

2. Run on Android/iOS (via Expo or React Native CLI):



npx expo start


---

Using AI Code Suggestions

1. Get an OpenAI API Key and add it to .env in shared/utils/aiSuggestions.js:



OPENAI_API_KEY=your_api_key_here

2. The app will provide inline suggestions, error explanations, and optimization hints for your code.




---

.gitignore Example

node_modules/
build/
.env
*.log

> Important: Do not upload API keys or sensitive information to GitHub.




---

License

This project is licensed under the MIT License – see LICENSE for details.

