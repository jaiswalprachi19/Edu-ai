# Edu AI: AI-Powered Knowledge Sharing Platform

Edu AI is a **community-driven, AI-enhanced platform** where learners and educators share expertise through threaded discussions, AI summaries, and interactive document Q&A. Built with modern LLMs (LangChain) and robust moderation tools.

## 🚀 Key Features
- **Threaded Q&A**: Create topics (e.g., finance, coding) and crowdsource answers.
- **AI Summarization**: Get concise summaries of long discussions (powered by LangChain).
- **Smart Moderation**: Automated API-based content flagging and email alerts for violations.
- **Document Chat (Upcoming)**: Upload PDFs/CSVs and query them via RAG (Retrieval-Augmented Generation).
- **Secure Auth**: User signup/login with password hashing (Node.js + MongoDB).

## 🔧 Tech Stack
- **Frontend**: HTML/CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI/APIs**: 
  - LangChain (for summarization)
  - Moderation APIs (content filtering)
- **Tools**: Git, npm

##  🛠️ Installation

 1. Clone the repo:
 ```bash
 git clone https://github.com/yourusername/edu-ai.git 
 ```
 
 2. Install dependencies:
```bash
cd edu-ai && npm install
```
 3. Set up environment variables (`.env`):
```bash
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_key (for LangChain)
```
 4. Run the server:
```bash
node app.js
```
 5. Access at `http://localhost:4000`
 
## 🌟 Future Roadmap

-   **RAG Integration**: Chat with uploaded documents.
    
-   **Premium Tier**: Pay-per-use AI tools (summaries, document Q&A).
    
-   **Mobile App**: iOS/Android support.
    