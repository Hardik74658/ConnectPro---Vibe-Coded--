import React, { useState, useRef, useEffect } from "react";

const mockChats = [
  { id: 1, name: "Jane Doe", lastMessage: "Let's connect soon!", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "John Smith", lastMessage: "Thanks for your help!", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
];

const mockMessages = [
  { from: "Jane Doe", text: "Hi there!", time: "10:00 AM" },
  { from: "me", text: "Hello Jane!", time: "10:01 AM" },
  { from: "Jane Doe", text: "Let's connect soon!", time: "10:02 AM" },
];

const Messages = ({ role }) => {
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [input, setInput] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [showTyping, setShowTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mobileChatListOpen, setMobileChatListOpen] = useState(true);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat, sentMessages, input]);

  useEffect(() => {
    setShowTyping(input.trim().length > 0);
  }, [input]);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setInput("");
    setShowTyping(false);
    setMobileChatListOpen(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSentMessages([
        ...sentMessages,
        { from: "me", text: input, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
      ]);
      setInput("");
      setShowTyping(false);
    }
  };

  const handleBackToChatList = () => {
    setMobileChatListOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#f6f7fb] to-[#e9eaf6] dark:from-[#181c2a] dark:to-[#23263a] transition-colors duration-500">
      {/* Mobile Chat List Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-white/90 dark:bg-[#23263a]/90 shadow-lg p-2 rounded-full border border-indigo-100 dark:border-[#23263a] hover:scale-105 transition-all"
        onClick={() => setMobileChatListOpen(true)}
        aria-label="Open chat list"
        style={{ display: mobileChatListOpen ? "none" : "block" }}
      >
        <svg className="w-6 h-6 text-indigo-500 dark:text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Chat List */}
      <aside
        className={`
          w-full md:w-80 bg-white/90 dark:bg-[#20243a]/95 shadow-2xl flex flex-col
          md:rounded-tr-3xl md:rounded-br-3xl mt-0 md:mt-8 md:ml-8 md:mb-8
          overflow-hidden backdrop-blur-md transition-all duration-500
          fixed inset-0 z-40 md:static
          ${mobileChatListOpen ? "flex" : "hidden"}
          md:flex
        `}
        style={{
          maxWidth: "100vw",
          height: "100vh",
          maxHeight: "100vh",
        }}
      >
        {/* Mobile Close Button */}
        <button
          className="md:hidden absolute top-4 right-4 bg-white/90 dark:bg-[#23263a]/90 shadow-lg p-2 rounded-full border border-indigo-100 dark:border-[#23263a] hover:scale-105 transition-all z-50"
          onClick={() => setMobileChatListOpen(false)}
          aria-label="Close chat list"
        >
          <svg className="w-5 h-5 text-indigo-500 dark:text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6 md:p-8 pb-2 font-extrabold text-xl md:text-2xl tracking-tight text-indigo-700 dark:text-fuchsia-200 select-none">
          Chats
        </div>
        <ul className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-100 dark:scrollbar-thumb-[#2d2f5a]/40">
          {mockChats.map((chat) => (
            <li
              key={chat.id}
              className={`flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 cursor-pointer transition-all duration-200 group
                ${selectedChat.id === chat.id
                  ? "bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-[#2d2f5a]/40 dark:to-[#23263a]/60 scale-[1.02] shadow"
                  : "hover:bg-indigo-50 dark:hover:bg-[#23263a]/60 hover:scale-[1.01]"
                }
                rounded-2xl mx-1 md:mx-2 my-1 md:my-2`}
              onClick={() => handleChatSelect(chat)}
              tabIndex={0}
            >
              <img src={chat.avatar} alt={chat.name} className="h-12 w-12 rounded-full shadow border-2 border-indigo-100 dark:border-[#2d2f5a] group-hover:scale-105 transition-all" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate text-indigo-900 dark:text-fuchsia-100 text-base">{chat.name}</div>
                <div className="text-xs text-indigo-400 dark:text-indigo-200 truncate">{chat.lastMessage}</div>
              </div>
              {selectedChat.id === chat.id && (
                <span className="ml-2 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-400 shadow animate-pulse" />
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Window */}
      <section
        className={`
          flex-1 flex flex-col w-full md:max-w-3xl mx-auto bg-white/95 dark:bg-[#23263a]/95
          rounded-none md:rounded-3xl shadow-2xl mt-0 md:mt-8 mb-0 md:mb-8 mr-0 md:mr-8
          overflow-hidden transition-all duration-500 min-h-[100vh] md:min-h-0
          ${mobileChatListOpen ? "hidden" : "flex"}
          md:flex
        `}
      >
        {/* Chat Header */}
        <div className="sticky top-0 z-10 flex items-center gap-3 md:gap-5 px-4 md:px-10 py-4 md:py-6 bg-gradient-to-r from-white/90 to-indigo-50/80 dark:from-[#23263a]/95 dark:to-[#2d2f5a]/95 border-b rounded-t-none md:rounded-t-3xl shadow backdrop-blur-md">
          {/* Mobile Back Button */}
          <button
            className="md:hidden mr-2 bg-white/90 dark:bg-[#23263a]/90 shadow p-2 rounded-full border border-indigo-100 dark:border-[#23263a] hover:scale-105 transition-all"
            onClick={handleBackToChatList}
            aria-label="Back to chat list"
          >
            <svg className="w-5 h-5 text-indigo-500 dark:text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img src={selectedChat.avatar} alt={selectedChat.name} className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-indigo-100 dark:border-fuchsia-400 shadow" />
          <div>
            <div className="font-bold text-lg md:text-xl text-indigo-900 dark:text-fuchsia-100">{selectedChat.name}</div>
            <div className="text-xs text-emerald-500 font-semibold animate-pulse">Online</div>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 md:px-10 py-3 md:py-8 space-y-4 md:space-y-6 bg-gradient-to-b from-white to-indigo-50 dark:from-[#23263a] dark:to-[#181c2a] scrollbar-thin scrollbar-thumb-indigo-100 dark:scrollbar-thumb-[#2d2f5a]/40">
          {mockMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"} transition-all duration-200`}
            >
              <div
                className={`max-w-full md:max-w-md rounded-2xl px-5 py-3 shadow
                  ${msg.from === "me"
                    ? "bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white rounded-br-xl"
                    : "bg-gradient-to-br from-indigo-50 to-white dark:from-[#2d2f5a]/40 dark:to-[#23263a]/60 text-indigo-900 dark:text-fuchsia-100 rounded-bl-xl"
                  }`}
                style={{
                  animation: `fadeIn 0.4s ${0.05 * idx}s both`
                }}
              >
                <div className="whitespace-pre-line text-base">{msg.text}</div>
                <div className="text-xs text-indigo-300 dark:text-indigo-200 mt-1 text-right">{msg.time}</div>
              </div>
            </div>
          ))}
          {sentMessages.map((msg, idx) => (
            <div
              key={`sent-${idx}`}
              className="flex justify-end transition-all duration-200"
            >
              <div className="max-w-full md:max-w-md rounded-2xl px-5 py-3 shadow bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white rounded-br-xl"
                style={{
                  animation: `fadeIn 0.4s ${0.05 * (mockMessages.length + idx)}s both`
                }}
              >
                <div className="whitespace-pre-line text-base">{msg.text}</div>
                <div className="text-xs text-indigo-100 mt-1 text-right">{msg.time}</div>
              </div>
            </div>
          ))}
          {showTyping && (
            <div className="flex justify-end transition-all duration-200">
              <div className="max-w-full md:max-w-md rounded-2xl px-5 py-3 shadow bg-gradient-to-br from-fuchsia-100 to-indigo-100 text-indigo-700 dark:from-[#2d2f5a]/70 dark:to-[#23263a]/70 rounded-br-xl opacity-90 animate-pulse">
                <div className="flex items-center gap-2">
                  <span>Typing</span>
                  <span className="animate-bounce text-fuchsia-500">...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        {/* Chat Input */}
        <form
          className="sticky bottom-0 flex gap-2 md:gap-3 px-4 md:px-10 py-2 md:py-6 bg-gradient-to-r from-white/95 to-indigo-50/90 dark:from-[#23263a]/95 dark:to-[#2d2f5a]/95 border-t rounded-b-none md:rounded-b-3xl shadow backdrop-blur-md"
          onSubmit={handleSend}
        >
          <input
            className="flex-1 border-none rounded-full px-4 md:px-6 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-200 dark:focus:ring-fuchsia-600 bg-indigo-50 dark:bg-[#20243a] shadow-inner text-indigo-900 dark:text-fuchsia-100 placeholder:text-indigo-300 dark:placeholder:text-indigo-400 transition-all text-base"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-indigo-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-fuchsia-200 dark:focus:ring-fuchsia-600 text-base"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </form>
      </section>
      {/* Animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-fade-in-right {
          animation: fadeIn 0.4s cubic-bezier(.4,2,.3,1) both;
        }
        .animate-fade-in-left {
          animation: fadeIn 0.4s cubic-bezier(.4,2,.3,1) both;
        }
        `}
      </style>
    </div>
  );
};

export default Messages;
