document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chat-btn");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Show Chatbot
    chatBtn.addEventListener("click", () => {
        chatContainer.classList.toggle("hidden");
    });

    // Close Chatbot
    closeChat.addEventListener("click", () => {
        chatContainer.classList.add("hidden");
    });

    // Simple Chatbot Responses
    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const msg = userInput.value.trim();
        if (msg === "") return;

        // Display User Message
        const userMsg = `<div><strong>You:</strong> ${msg}</div>`;
        chatBox.innerHTML += userMsg;

        // Bot Response
        let botReply = getBotResponse(msg);
        setTimeout(() => {
            chatBox.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);

        userInput.value = "";
    }

    function getBotResponse(input) {
        const responses = {
            "hi": "Hello! How can I help you?",
            "hello": "Hi there! Need help with something?",
            "bye": "Goodbye! Have a great day!",
            "price": "We have different price ranges. Please visit our shop for details.",
            "shoes": "We have a variety of shoes. Check out our products!",
        };
        return responses[input.toLowerCase()] || "Sorry, I didn't understand that.";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-toggle");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeButton = document.querySelector(".close-btn");

    // Open Chatbot
    chatButton.addEventListener("click", function () {
        chatbotContainer.style.display = "block";
    });

    // Close Chatbot
    closeButton.addEventListener("click", function () {
        chatbotContainer.style.display = "none";
    });

    // Close chatbot when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === chatbotContainer) {
            chatbotContainer.style.display = "none";
        }
    });
});
function openChatbot() {
    document.getElementById("chatbot-container").classList.remove("hidden");
}

function closeChatbot() {
    document.getElementById("chatbot-container").classList.add("hidden");
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const msg = input.value.trim();
    if (msg === "") return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;

    let response = getBotResponse(msg);
    setTimeout(() => {
        chatBox.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}


function getBotResponse(input) {
    const responses = {
        "hi": "Hello! How can I help you?",
        "price" : "Our products range from ₹500 to ₹3000.",
        "bye": "Thanks for visiting! Come again!",
        "hello": "Hi there!",
        "shoes": "We have the latest trendy shoes. Check out our shop page!",
    };
    return responses[input.toLowerCase()] || "Sorry, I didn't understand that.";
}


  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const product = button.closest(".product");
      const name = product.querySelector(".product-name").innerText;
      const price = product.querySelector(".product-price").innerText;
  
      const item = { name, price };
      cart.push(item);
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      alert(`${name} added to cart!`);
    });
  });
  