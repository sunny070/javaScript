const btn = document.getElementById('.btn')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

async function getQuote(){
    try{

        const response = await fetch('https://dummyjson.com/quotes/random')
        const data = await response.json()
        
        quote.textContent = `"${data.quote}"`
        author.textContent = `"${data.author}"`

    }
    catch (error){
        console.error("Error fetching the quote: ", error);
        quoteText.textContent = "An error occurred. Please try again later.";
        authorText.textContent = "";
    }
    
}

newQuote = addEventListener('click',getQuote)

getQuote()
// 9863736583