// Reference quotes: https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80
const quotes = [
    {
        quote:"Life isn't about getting and having, it's about giving and being.",
        author:"Kevin Kruse"
    },
    {
        quote:"Whatever the mind of man can conceive and believe, it can achieve.",
        author:"Napoleon Hill"
    },
    {
        quote:"Strive not to be a success, but rather to be of value.",
        author:"Albert Einstein"
    },
    {
        quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author:"Robert Frost"},
    {
            quote:"I attribute my success to this: I never gave or took any excuse.",
            author:"Florence Nightingale"
    },              
    {               
            quote:"You miss 100% of the shots you don't take.",
            author:"Wayne Gretzky"
    },
    {
        quote:"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
        author:"Michael Jordan"
    },
    {
        quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",
        author:"Amelia Earhart"
    },
    {
        quote:"Every strike brings me closer to the next home run.",
        author:"Babe Ruth"
    },
    {
        quote:"Definiteness of purpose is the starting point of all achievement.",
        author:"W. Clement Stone"
    },
    {
        quote:"We must balance conspicuous consumption with conscious capitalism.",
        author:"Kevin Kruse"
    },
    {
        quote:"Life is what happens to you while you're busy making other plans.",
        author:"John Lennon"
    },
    {
        quote:"We become what we think about.",
        author:"Earl Nightingale"
    },
    {
        quote:"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        author:"Mark Twain"
    },
    {
        quote:"Life is 10% what happens to me and 90% of how I react to it.",
        author:"Charles Swindoll"
    },
    {
        quote:"The most common way people give up their power is by thinking they don't have any.",
        author:"Alice Walker"
    },
    {
        quote:"The mind is everything. What you think you become.",
        author:"Buddha"
    },
    {
        quote:"The best time to plant a tree was 20 years ago. The second best time is now.",
        author:"Chinese Proverb"
    },
    {
        quote:"An unexamined life is not worth living.",
        author:"Socrates"
    },
    {
        quote:"Eighty percent of success is showing up.",
        author:"Woody Allen"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life.",
        author:"Steve Jobs"
    },
    {
        quote:"Winning isn't everything, but wanting to win is.",
        author:"Vince Lombardi"
    },
    {
        quote:"I am not a product of my circumstances. I am a product of my decisions.",
        author:"Stephen Covey"
    }
];

const colors = ["#e76f51", "#f4a261", "#e9c46a", "#2a9d8f", "#264653", "#ffbd00", "#ff5400", "#ff0054", "#9e0059", "#390099"];

function generateQuote() {
    let quoteIndex = Math.floor(Math.random()*quotes.length);
    let colorIndex = Math.floor(Math.random()*colors.length);
    document.getElementById("text").innerHTML = quotes[quoteIndex].quote;
    document.getElementById("author").innerHTML = quotes[quoteIndex].author;

    // change color when generate new quote
    document.body.style.backgroundColor = colors[colorIndex];
    document.getElementById("text").style.color = colors[colorIndex];
    document.getElementById("author").style.color = colors[colorIndex];
    document.getElementById("tweet-quote").style.color = colors[colorIndex];
    document.getElementById("new-quote").style.backgroundColor = colors[colorIndex];
}

function tweet() {
    let content = document.getElementById("text").textContent;
    let author = document.getElementById("author").textContent;
    document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=" + content + " -" + author;
}



window.onload = generateQuote;
