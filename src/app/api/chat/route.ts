import { Groq } from "groq-sdk";
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Initialize browser for web scraping
    const browser = await puppeteer.launch({
      headless: true
    });

    // Example URL to scrape (you can modify this based on your needs)
    const urlToScrape = "https://example.com";

    // Open a new page and navigate to the URL
    const page = await browser.newPage();
    await page.goto(urlToScrape);

    // Get the page content
    const content = await page.content();

    // Load the content into Cheerio
    const $ = cheerio.load(content);

    // Example: Extract specific data (modify the selector as needed)
    const scrapedData = $("h1").text(); // Extracts text from the first <h1> element

    // Create a chat completion with Groq
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant that can answer questions and help with web scraping tasks."
        },
        {
          role: "user",
          content: message
        },
        {
          role: "assistant",
          content: `Here is the scraped data: ${scrapedData}` // Include scraped data in the response
        }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 2048,
    });

    // Close browser
    await browser.close();

    // Return the AI response
    return Response.json({
      message: completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response."
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return Response.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
