"use client";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { useEffect, useState } from "react";

export default function MentalHealthChatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [chat, setChat] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const API_KEY = 'AIzaSyDyUe6Y3hT_3TIM0QFT-fBr908PZlGDG78';
    const MODEL_NAME = "gemini-1.0-pro-001";

    const genAI = new GoogleGenerativeAI(API_KEY);
    const generationConfig = {
        temperature: 0.7,
        top_p: 1,
        max_output_tokens: 2048,
    };
    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    useEffect(() => {
        const initChat = async () => {
            try {
                const newChat = await genAI
                    .getGenerativeModel({ model: MODEL_NAME })
                    .startChat({
                        generationConfig,
                        safetySettings,
                        history: messages.map((msg) => ({
                            text: msg.text,
                            role: msg.role,
                        })),
                    });
                setChat(newChat);
                setError(null);
            } catch (error) {
                console.error(error);
                setError("Failed to initialise chat. Please try again.");
            }
        };
        initChat();
    }, [messages]);

    const handleSendMessage = async () => {
        if (userInput.trim() === "") return; // Prevent sending empty messages
        setLoading(true);
        try {
            const userMessage = {
                text: userInput,
                role: "user",
                timestamp: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setUserInput("");

            if (chat) {
                const prompt = `You are a mental health assistant. Please respond to the following user input with empathy and understanding. Provide helpful suggestions or resources if appropriate.\n\nUser: "${userInput}"\nBot:`;

                const result = await chat.sendMessage(prompt);
                const botMessage = {
                    text: await result.response.text(),
                    role: "bot",
                    timestamp: new Date(),
                };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }
        } catch (error) {
            console.error(error);
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col h-[600px] lg:pl-[200px] lg:pr-[400px] px-10 pt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, #2596be, #085cac, #604cb4)', // Updated with hex codes
                    backgroundSize: '200% 200%', // Double the size for smooth animation
                    animation: 'moveGradient 10s ease infinite', // Attach the animation
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>Your own chatbot for mental health assistance</h1>
            </div>
            <div className="flex-1 overflow-y-auto rounded-md p-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
                    >
                        <span className="p-2 rounded-lg font-serif">{msg.text}</span>
                        <p className="text-[12px] mt-1">
                            {msg.timestamp.toLocaleTimeString()}
                        </p>
                    </div>
                ))}
            </div>
            {error && chat === null && <div className="text-[red] text-sm mb-4">{error}</div>}
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex p-2 rounded-l-md border-t border-b border-l focus:outline-none focus:border-[blue]"
                    disabled={loading}
                />
                <button
                    onClick={handleSendMessage}
                    className="p-2 rounded-r-md hover:bg-opacity-80 focus:outline-none"
                    disabled={loading || userInput.trim() === ""} // Disable send button if empty or loading
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
}
