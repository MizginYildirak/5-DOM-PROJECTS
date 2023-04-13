// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Don't cry because it's over, smile because it happened."`,

    person: `Dr. Seuss`
    }, {
        quote: `"Be yourself; everyone else is already taken."`,

        person: `Oscar Wilde`
    }, {
        quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,

        person: `Albert Einstein`
    }, {
        quote: `"You only live once, but if you do it right, once is enough."`,

        person: `Mae West`
    }, {
        quote: `"Be the change that you wish to see in the world."`,

        person: `Mahatma Gandhi`
    }, {
        quote: `"In three words I can sum up everything I've learned about life: it goes on."`,

        person: `Robert Frost`
    }, {
        quote: `"One good thing about music, when it hits you, you feel no pain."`,

        person: `Bob Marley`
    }, {
        quote: `"Music expresses that which cannot be put into words and that which cannot remain silent"`,

        person: `Victor Hugo`
    }, {
        quote: `"What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain."`,

        person: `Maya Angelou`
    }, {
        quote: `"The measure of intelligence is the ability to change."`,

        person: `Albert Einstein`
    },  {
        quote: `"Those who cannot change their minds cannot change anything."`,

        person: `George Bernard Shaw`
    }, 
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}) 