const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

// Predefined responses for the chatbot
const predefinedResponses = {
    "hi": "Hello! How can I assist you today?",
    "how are you": "I'm just a chatbot, but thanks for asking! How are you?",
    "what is your name": "I'm your friendly chatbot. What's yours?",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "bye": "Goodbye! Have a great day!",
};

// Function to create a chat message element (either outgoing or incoming)
const createChatLi = (message, className) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);

    // Set the icon based on message type
    let icon;
    if (className === "incoming") {
        icon = "./public/image/chatbot.png"; // Path to chatbot icon
    } else {
        icon = "./public/image/hacker.png"; // Path to hacker icon for user messages
    }

    let chatContent = `
        <img src="${icon}" alt="Chat Icon" class="${className === 'incoming' ? 'chatbot-icon' : 'hacker-icon'}">
        <p>${message}</p>`;

    chatli.innerHTML = chatContent;
    return chatli;
};

// Function to generate a response based on predefined responses
const generateResponse = (incomingChatLi, userMessage) => {
    const messageElement = incomingChatLi.querySelector("p");

    // Convert user message to lowercase and check for predefined response
    const response = predefinedResponses[userMessage.toLowerCase()] || "Oops! I don't understand that. Please try again.";

    // Update the incoming message with the response
    messageElement.textContent = response;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append the outgoing message (user message)
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        // Create and append the "Thinking..." message for the incoming chat
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);

        // Generate the response based on predefined responses
        generateResponse(incomingChatLi, userMessage);
    }, 600);

    // Clear the chat input after sending the message
    chatInput.value = "";
};

// Event listener for clicking the send button
sendChatBtn.addEventListener("click", handleChat);
