window.chatInput = document.querySelector(".chat-input textarea");
window.sendChatBtn = document.querySelector(".chat-input span");
window.chatbox = document.querySelector(".chatbox");


// Predefined responses for the chatbot
const predefinedResponses = {
    "hi": "Hello! How can I assist you today?",
    "how are you": "I'm just a chatbot, but thanks for asking! How are you?",
    "what is your name": "I'm your friendly chatbot. What's yours?",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "bye": "Goodbye! Have a great day!",
};

// Function to create a chat message element (either outgoing or incoming)
window.createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    // Set the icon based on message type
    let icon;
    if (className === "incoming") {
        icon = "/image/chatbot.png"; // Path to chatbot icon
    } else {
        icon = "/image/hacker.png"; // Path to hacker icon for user messages
    }

    chatli.innerHTML = `<img src="${icon}" alt="Chat Icon" class="${className === 'incoming' ? 'chatbot-icon' : 'hacker-icon'}"><p>${message}</p>`;
    return chatli;
};

// Function to generate a response based on predefined responses
window.generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");

    // Convert user message to lowercase and check for predefined response
    // Update the incoming message with the response
    messageElement.textContent = predefinedResponses[window.userMessage.toLowerCase()] || "Oops! I don't understand that. Please try again.";
};

window.handleChat = () => {
    window.userMessage = window.chatInput.value.trim();
    if (!window.userMessage) return;

    // Append the outgoing message (user message)
    window.chatbox.appendChild(window.createChatLi(window.userMessage, "outgoing"));

    setTimeout(() => {
        // Create and append the "Thinking..." message for the incoming chat
        const incomingChatLi = window.createChatLi("Thinking...", "incoming");
        window.chatbox.appendChild(incomingChatLi);

        // Generate the response based on predefined responses
        window.generateResponse(incomingChatLi, window.userMessage);
    }, 600);

    // Clear the chat input after sending the message
    window.chatInput.value = "";
};

// Event listener for clicking the send button
window.sendChatBtn.addEventListener("click", window.handleChat);
