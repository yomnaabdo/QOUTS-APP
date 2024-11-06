// Array of 10 quotes with authors
let quotes = [
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
    },
    { text: "You learn more from failure than from success.", author: "Unknown" },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
    },
    {
        text: "If you are working on something that you really care about, you don't have to be pushed.",
        author: "Steve Jobs",
    },
    {
        text: "People who are crazy enough to think they can change the world are the ones who do.",
        author: "Rob Siltanen",
    },
    {
        text: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino",
    },
    {
        text: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk.",
        author: "Mohnish Pabrai",
    },
    {
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou",
    },
    {
        text: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
        author: "Johann Wolfgang von Goethe",
    },
];

// Function to display a unique random quote with author
function displayRandomQuote() {
    const sound = document.getElementById("buttonSound");
    sound.play(); // Play the sound effect

    if (quotes.length === 0) {
        document.getElementById("quote").textContent = "No more quotes to display!";
        document.getElementById("author").textContent = "";
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${quote.text}"`;
    document.getElementById("author").textContent = `- ${quote.author}`;
    quotes.splice(randomIndex, 1); // Remove the displayed quote from the array
}
