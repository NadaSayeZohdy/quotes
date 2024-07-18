var demoElement = document.getElementById("demo")
var authorElement = document.getElementById("author")
const quotes = [{
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
},
{
    text: "A room without books is like a body without a soul",
    author: " Marcus Tullius Cicero "
},
{
    text:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
   
    author: "Bernard M. Baruch"
},
{
    text: "Be the change that you wish to see in the world.",
    author: " Mahatma Gandhi"
},
{
   text:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
       author: "J.K. Rowling, Harry Potter and the Goblet of Fire "
},
{
   text:"A friend is someone who knows all about you and still loves you.",
   author: "Elbert Hubbard"
},
{
    text:"Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde"
 },
 {
    text:"Without music, life would be a mistake.",
    author: "Friedrich Nietzsche"
 },
 {
    text:"A room without books is like a body without a soul.",
    author: "marcus Tullius Cicero"
 },
 {
    text:"If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
 },
 {
    text:"In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
 },
];




function newQuote() {
const randomNumber = Math.floor(Math.random() * quotes.length);
demoElement.innerHTML =  quotes[randomNumber].text;
authorElement.innerHTML ="-" + quotes[randomNumber].author;
}