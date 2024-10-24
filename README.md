# HapiGPT Backend

A Node.js/Express backend service that powers HapiGPT, an AI-powered therapeutic chat application using OpenAI's GPT-3.5 Turbo model.

## 🚀 Live API
[hpigpt-back.vercel.app](https://hpigpt-back.vercel.app)

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **AI Model:** OpenAI GPT-3.5 Turbo
- **Deployment:** Vercel
- **API:** RESTful endpoints

## 📋 Features

- **AI Therapeutic Chat:** Implements a curious therapist persona using GPT-3.5
- **Conversation History:** Maintains chat context for meaningful interactions
- **CORS Enabled:** Supports cross-origin requests
- **Error Handling:** Robust error management for API requests
- **Environment Variables:** Secure configuration management

## 🏗️ Architecture

The service implements a RESTful API with the following endpoints:

### GET /
Health check endpoint that returns "Hello World!"

### POST /
Chat endpoint that processes messages and returns AI responses

**Request Body:**
```json
{
  "message": "string",
  "hapi": [
    {
      "sender": "user" | "ai",
      "message": "string"
    }
  ]
}
```

**Response:**
```json
{
  "message": "AI response string"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saadzaki7/HapiGPTBackend.git
cd HapiGPTBackend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
API_KEY=your_openai_api_key
```

4. Start the server:
```bash
npm start
```

The server will start on port 3080.

## 📦 Project Structure

```
HapiGPTBackend/
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── vercel.json       # Vercel deployment config
└── .env             # Environment variables
```

## 🛠️ Development

### Environment Variables
- `API_KEY`: Your OpenAI API key

### Dependencies
- `express`: Web framework
- `cors`: CORS middleware
- `body-parser`: Request parsing
- `openai`: OpenAI API client
- `dotenv`: Environment variable management

## 🚀 Deployment

The application is deployed on Vercel. For deployment:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## 🔒 Security

- Environment variables for sensitive data
- CORS configuration
- Request validation
- Error handling

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Saad Zaki - [s4zaki@uwaterloo.ca](mailto:s4zaki@uwaterloo.ca)

Project Link: [https://github.com/saadzaki7/HapiGPTBackend](https://github.com/saadzaki7/HapiGPTBackend)
