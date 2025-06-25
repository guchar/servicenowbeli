/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { X, Send } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { getAssistantResponse } from "@/lib/food-assistant";

const ASSISTANT_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZjx68gkPoA7SQ0ZwJ_LOXuosTfsgT-q3rw&s";

interface ChatMsg {
  id: string;
  sender: "user" | "bot";
  content: string;
  time: Date;
}

export function FoodAssistantWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMsg[]>([
    {
      id: "welcome",
      sender: "bot",
      content: "Hi! I'm NomNow. Ask me for sweet, savory, or healthy options!",
      time: new Date(),
    },
  ]);
  const [input, setInput] = React.useState("");
  const suggestions = [
    "Where can I find coffee?",
    "Show me healthy snacks",
    "I'm craving something sweet",
    "What's popular today?",
  ];
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    const userMsg: ChatMsg = {
      id: Date.now().toString(),
      sender: "user",
      content: input,
      time: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Generate a data-driven answer
    const answer = getAssistantResponse(userMsg.content);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          content: answer,
          time: new Date(),
        },
      ]);
    }, 400);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  function handleSuggestion(text: string) {
    setInput(text);
    // directly send
    setTimeout(() => handleSend(), 0);
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 w-80 h-[420px] bg-white shadow-xl rounded-lg flex flex-col z-50 border text-sm">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0b7cce] text-white px-3 py-2 rounded-t-lg">
            <div className="flex items-center gap-2">
              <Image
                src={ASSISTANT_LOGO}
                alt="NomNow Logo"
                width={20}
                height={20}
                className="rounded-full object-cover"
                unoptimized
              />
              <span className="font-medium text-xs">NomNow</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close Food Assistant"
              className="hover:opacity-90"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-grow overflow-y-auto p-3 space-y-2 text-xs"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-[#0b7cce] text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="p-2 border-t flex flex-wrap gap-2 bg-gray-50">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="text-[10px] bg-white border rounded-full px-2 py-1 hover:bg-gray-100"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me..."
              className="flex-grow border rounded px-2 py-1 text-xs focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button
              className="p-1 text-[#0b7cce] disabled:opacity-40"
              disabled={!input.trim()}
              onClick={handleSend}
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open NomNow"
          className="fixed bottom-4 right-4 z-50 bg-[#0b7cce] hover:bg-[#0b7cce]/90 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <Image
            src={ASSISTANT_LOGO}
            alt="NomNow Logo"
            width={24}
            height={24}
            className="rounded-full object-cover"
            unoptimized
          />
        </button>
      )}
    </>
  );
}
