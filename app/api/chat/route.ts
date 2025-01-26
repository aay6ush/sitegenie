import { getSystemPrompt } from "@/constants/prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt, history, isFollowUp } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: getSystemPrompt(),
      generationConfig: {
        temperature: 0.9,
        topP: 1,
        topK: 1,
        maxOutputTokens: 8192,
      },
    });

    const systemPromptText = getSystemPrompt();

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPromptText }] },
        ...(history as ChatMessage[]).map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 8192,
      },
    });

    const result = await chat.sendMessage([
      {
        text: isFollowUp
          ? `Modify the existing website based on this request: ${prompt}\nRemember to return the complete file structure in the site format, not just the changes.`
          : `Create a website with the following description: ${prompt}\nReturn the complete file structure in the site format.`,
      },
    ]);

    const response = result.response;
    const message = response.text();

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
