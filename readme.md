
# 🗣️ Edu-ai - AI-Powered Discussion Platform

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/) [![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

> 🚀 A modern, intelligent forum application that combines real-time discussions with AI-powered content moderation and summarization capabilities.

----------

## ✨ What Makes This Special?

Forum Connect isn't just another discussion platform - it's a next-generation forum that leverages cutting-edge AI technology to enhance user experience:

-   🤖 **AI-Powered Summaries**: Get instant thread summaries using Cohere AI
-   🛡️ **Smart Moderation**: Automated content filtering with real-time notifications
-   ⚡ **Lightning Fast**: Redis caching for optimal performance
-   🔐 **Secure**: JWT authentication with protected routes
-   📧 **Smart Notifications**: Email alerts for important events

----------

## 🎯 Features at a Glance

### 👥 **User Management**

-   Secure registration and authentication
-   JWT-based session management
-   User profile tracking with post history
-   Protected routes middleware

### 💬 **Discussion Engine**

-   Create rich discussion topics with file attachments
-   Nested reply system
-   Real-time thread updates
-   Chronological sorting and organization

### 🔍 **AI Integration**

-   **Thread Summarization**: Get AI-generated summaries of long discussions
-   **Content Analysis**: Automated content quality assessment
-   **Smart Insights**: LangChain-powered discussion analytics

### 🛡️ **Content Moderation**

-   Automated inappropriate content detection
-   Real-time moderator notifications
-   Email alerts for policy violations
-   Comprehensive flagging system

### ⚡ **Performance Optimization**

-   Redis caching for user data
-   Optimized MongoDB queries
-   Efficient population strategies
-   Scalable architecture

----------

## 🛠️ Tech Stack

### Backend Powerhouse

```
🟢 Node.js          - Runtime environment
🔳 Express.js       - Web framework
🍃 MongoDB          - NoSQL database
🔴 Redis            - Caching layer
🔑 JWT              - Authentication
📧 Nodemailer       - Email service

```

### AI & Intelligence

```
🧠 Cohere AI        - Text summarization
🔗 LangChain        - AI orchestration
🛡️ Moderation API   - Content filtering

```

### Frontend & Templates

```
📄 EJS              - Server-side templating
🎨 Static Assets    - CSS, JS, Images

```

----------

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:

-   Node.js (v14+)
-   Python (v3.8+)
-   MongoDB
-   Redis Server

### Installation

1.  **Clone the repository**
    
    ```bash
    git clone https://github.com/yourusername/forum-connect.git
    cd forum-connect
    
    ```
    
2.  **Install dependencies**
    
    ```bash
    # Install Node.js dependencies
    npm install
    
    # Install Python dependencies
    pip install -r requirements.txt
    
    ```
    
3.  **Environment Setup** Create a `.env` file in the root directory:
    
    ```env
    Mongo_uri=mongodb://localhost:27017/forum_db
    PORT=3000
    MODERATION_API=your_moderation_api_key
    EMAIL_PASSWORD=your_email_app_password
    JWT_SECRET=your_super_secret_jwt_key
    REDIS_URL=redis://localhost:6379
    COHERE_API_KEY=your_cohere_api_key
    
    ```
    
4.  **Start the services**
    
    ```bash
    # Start MongoDB (if not running as service)
    mongod
    
    # Start Redis (if not running as service)
    redis-server
    
    # Start the application
    npm start
    # or for development
    npm run dev
    
    ```
    
5.  **Visit the application** Open your browser and navigate to `http://localhost:3000`
    

----------

## 📚 API Documentation

### 🔐 Authentication Endpoints

Method

Endpoint

Description

Auth Required

`POST`

`/register`

Create new user account

❌

`POST`

`/login`

User authentication

❌

`GET`

`/logout`

End user session

✅

### 💬 Forum Endpoints

Method

Endpoint

Description

Auth Required

`GET`

`/threads`

Fetch all discussion threads

✅

`POST`

`/reply`

Add reply to existing thread

✅

`POST`

`/log-query-id`

Generate AI thread summary

✅

### 👥 User Management

Method

Endpoint

Description

Auth Required

`GET`

`/api/allUsers`

Get cached user list

✅

### 🛡️ Moderation

Method

Endpoint

Description

Auth Required

`POST`

`/flagged-replies`

Handle content moderation

✅

----------

## 🗃️ Database Schema

### 👤 User Model

```javascript
{
  name: String,           // User's display name
  email: String,          // Unique email address
  password: String,       // Hashed password
  infos: [ObjectId],      // Created topics reference
  reply: [ObjectId],      // User replies reference
  createdAt: Date,        // Account creation date
  isActive: Boolean       // Account status
}

```

### 📝 Topic (Info) Model

```javascript
{
  topic: String,          // Discussion title
  content: String,        // Main post content
  document: String,       // File attachment path
  user: ObjectId,         // Creator reference
  replies: [ObjectId],    // Thread replies
  date: Date,            // Creation timestamp
  views: Number,         // View counter
  isSticky: Boolean      // Pinned status
}

```

### 💭 Reply Model

```javascript
{
  replycontent: String,   // Reply text content
  user: ObjectId,         // Author reference
  query: ObjectId,        // Parent topic reference
  date: Date,            // Reply timestamp
  isEdited: Boolean,     // Edit status
  editedAt: Date         // Last edit time
}

```

----------

## 📁 Project Architecture

```
forum-connect/
├── 🏠 app.js                    # Application entry point
├── 📊 model/                    # Database models
│   ├── user.js                  # User schema
│   ├── info.js                  # Topic schema
│   └── reply.js                 # Reply schema
├── 🔒 middleware/               # Custom middleware
│   └── isLoggedin.js           # Authentication guard
├── 🛠️ helper/                   # Utility functions
│   ├── generatekey.js          # JWT utilities
│   └── sendmail.js             # Email functions
├── 🛣️ Routes/                   # Route handlers
│   ├── auth.js                 # Authentication routes
│   └── topic.js               # Forum routes
├── 🎮 controllers/              # Business logic
│   └── allUser.js             # User controller
├── 🎨 public/                   # Static assets
│   ├── css/                   # Stylesheets
│   ├── js/                    # Client scripts
│   └── images/                # Images & icons
├── 📤 uploads/                  # File uploads
├── 🐍 Python Scripts/           # AI processing
│   ├── log_query.py           # Query processor
│   └── summariser_agent.py    # AI summarization
└── 📋 views/                    # EJS templates
    ├── partials/              # Reusable components
    └── pages/                 # Main pages

```

----------

## 🤖 AI Features Deep Dive

### Thread Summarization

Our AI-powered summarization uses Cohere's advanced language models to:

-   Extract key discussion points
-   Identify main arguments and conclusions
-   Generate concise, readable summaries
-   Maintain context and nuance

### Content Moderation

The intelligent moderation system:

-   Scans posts in real-time
-   Detects inappropriate content
-   Sends automated alerts
-   Maintains discussion quality

----------

## 🔧 Configuration Options

### Environment Variables Explained

```env
# Database Configuration
Mongo_uri=mongodb://localhost:27017/forum_db

# Server Configuration  
PORT=3000

# Third-party Services
MODERATION_API=your_moderation_api_key
COHERE_API_KEY=your_cohere_api_key

# Email Configuration
EMAIL_PASSWORD=your_gmail_app_password
EMAIL_USER=your_email@gmail.com

# Security
JWT_SECRET=your_super_secret_key_here
SESSION_SECRET=another_secret_for_sessions

# Cache Configuration
REDIS_URL=redis://localhost:6379
CACHE_TTL=3600

```

----------

## 🚀 Deployment

### Production Checklist

-   [ ] Set production environment variables
-   [ ] Configure MongoDB Atlas or production database
-   [ ] Set up Redis Cloud or production cache
-   [ ] Configure email service (Gmail, SendGrid, etc.)
-   [ ] Set up domain and SSL certificate
-   [ ] Configure reverse proxy (Nginx)
-   [ ] Set up monitoring and logging

### Docker Deployment

```dockerfile
# Coming soon! Docker configuration for easy deployment

```

----------


### Development Guidelines

-   Follow JavaScript ES6+ standards
-   Write descriptive commit messages
-   Add tests for new features
-   Update documentation as needed

----------

## 📈 Roadmap

### 🎯 Upcoming Features

-   [ ] Real-time messaging with Socket.io
-   [ ] Advanced search functionality
-   [ ] User reputation system
-   [ ] Mobile app development
-   [ ] Advanced AI analytics
-   [ ] Multi-language support

### 🐛 Known Issues

-   File upload size limits need configuration
-   Email templates need styling improvements
-   Mobile responsiveness enhancements needed

----------

## 📸 Screenshots

> 🚧 Add screenshots of your application here to showcase the UI

----------

## 📞 Support & Contact

-   📧 **Email**: your-jaiswalprachi19@gmail.com
-   🐛 **Issues**: [GitHub Issues](https://github.com/jaiswalprachi19/forum-connect/issues)
-   💬 **Discussions**: [GitHub Discussions](https://github.com/jaiswalprachi19/forum-connect/discussions)

----------

## 🙏 Acknowledgments

-   **Cohere AI** for powerful text summarization
-   **MongoDB** team for excellent documentation
-   **Express.js** community for middleware inspiration
-   **Open Source** community for continuous support

----------

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and lots of ☕**


</div>
