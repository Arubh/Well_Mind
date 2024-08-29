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
        if (userInput.trim() === "") return;
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
        <div className="flex flex-col h-[550px] lg:pl-[200px] lg:pr-[400px] px-10 pt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold" style={{
                    backgroundImage: 'linear-gradient(to right, #2596be, #085cac, #604cb4)',
                    backgroundSize: '200% 200%',
                    animation: 'moveGradient 10s ease infinite',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>Your own chatbot for mental health assistance</h1>
            </div>
            <div className="flex-1 overflow-y-scroll rounded-md p-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`block`}
                    >
                        <div className={`rounded-[10px] font-serif bg-[#7272ef] gap-4 p-6 mt-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>{msg.text}</div>
                        <div className={`text-[12px] mt-1 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            {msg.timestamp.toLocaleTimeString()}
                        </div>
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
                    className="ai-input flex p-2 rounded-l-md border-t border-b border-l focus:outline-none focus:border-[blue]"
                    disabled={loading}
                />
                <button
                    onClick={handleSendMessage}
                    className="ai-input ml-2"
                    disabled={loading || userInput.trim() === ""}
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </div>
        </div>
    );
}
