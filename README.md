# AI Answer Engine with Next.js and TypeScript

This project is focused on building an **AI Answer Engine** inspired by Perplexity.ai, utilizing **Next.js**, **TypeScript**, and advanced web scraping techniques. The engine mitigates hallucinations by citing sources for all provided answers. You will be creating an interface similar to [WebChat.so](https://www.webchat.so/).

## Features
- **Scrape Website Content**: Parse and extract content from URLs provided by the user.
- **Source-Cited Responses**: Deliver AI-powered answers with accurate source citations.
- **Interactive Chat Interface**: Allow users to ask questions, paste URLs, and share/continue conversations.
- **Rate Limiting**: Implement rate-limiting functionality to manage usage.

## Technologies Used
- **Next.js**: Framework for the web application.
- **TypeScript**: Strongly typed JavaScript for improved developer experience.
- **Groq**: Query language for structured data.
- **Cheerio and Puppeteer**: Libraries for web scraping.
- **Redis**: Used for rate-limiting middleware.
- **Large Language Models (LLMs)**: Backend support for natural language understanding.

## Getting Started

### Prerequisites
1. Install **Node.js** (v18 or higher) and **npm/yarn**.
2. Set up a **Redis** instance for rate limiting.
3. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
4. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development Setup
1. Create a `.env` file at the root of the project to store necessary environment variables.
2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open your browser and navigate to `http://localhost:3000`.

## TODOs

### 1. Chat Interface
- **File**: `src/app/page.tsx`
- **Task**: Update the UI and handle API responses to create an interactive user experience.

### 2. Chat API Implementation
- **File**: `src/app/api/chat/route.ts`
- **Task**: Implement the chat API using **Groq** for querying data and **Cheerio**/**Puppeteer** for web scraping.

### 3. Rate Limiting Middleware
- **File**: `src/middleware.ts`
- **Task**: Use Redis to manage rate limiting and control API access.

## Project Submission Requirements
To complete and submit this project, ensure the following:

### Functionalities
1. **Chat Interface**
   - Users can paste a set of URLs and receive contextual responses derived from the content of the URLs.
2. **Question & Answer with Sources**
   - Users can ask questions and receive answers with cited sources to enhance credibility.
3. **Conversation Sharing**
   - Users can share their conversation links and allow others to continue the dialogue seamlessly.

### Deployment
- Deploy your application to a hosting platform such as Vercel, AWS, or Netlify.
- Ensure the deployed app is functional and meets the project requirements.

### Documentation
- Include detailed documentation in the repository, covering:
  - Setup instructions.
  - API structure and endpoints.
  - Explanation of key files and functionalities.

## Contribution Guidelines
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Open a pull request with a clear description of your changes.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

**Happy Coding!** 🎉
