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

### Documentation

- **Setup Instructions**: 
  - Detailed steps on how to set up the project locally, including prerequisites, installation, and running the application.

- **API Structure and Endpoints**: 
  - Overview of the API endpoints available in the application, including:
    - **POST /api/chat**: Sends a user message and receives a response from the AI. 
      - **Request Body**: 
        ```json
        {
          "message": "Your question here"
        }
        ```
      - **Response**: 
        ```json
        {
          "message": "AI's response here"
        }
        ```

- **Explanation of Key Files and Functionalities**: 
  - **src/app/page.tsx**: Main component for the chat interface, handling user input and displaying messages.
  - **src/api/chat.ts**: API route for processing chat messages and generating AI responses.
  - **src/styles/globals.css**: Global styles for the application, including Tailwind CSS configurations.
  - **.env**: Environment variables for configuration, such as API keys and database connections.


## Contribution Guidelines
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Open a pull request with a clear description of your changes.

## Future Updates
- Add image upload and OCR functionality to extract text from images.
- Add a feature to save and share conversations.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

**Happy Coding!** 🎉
