const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const btn = document.querySelectorAll(".btn")
const fullName = document.getElementById("name")
const title = document.getElementById("title")
const text = document.getElementById("text")
const image = document.querySelector(".image")

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg'
]

const profiles = [
    {
        name: "Susan Smith",
        title: "WEB DEVELOPER",
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
        // images: [
        //     'images/1.jpg',
        //     'images/2.jpg',
        //     'images/3.jpg'
        // ]
    },
    {
        name: "Sarah Done",
        title: "Graphic Designer",
        text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."
    },
    {
        name: "Anne Johnson",
        title: "Sales Manager",
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
    }
]

let imageIndex = 0;
let profileIndex = 0;

image.src = images[imageIndex]
fullName.innerHTML = profiles[profileIndex].name
title.innerHTML = profiles[profileIndex].title
text.innerHTML = profiles[profileIndex].text

nextBtn.addEventListener("click", function () {
    imageIndex++
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    image.src = images[imageIndex]

    profileIndex++
    if (profileIndex >= profiles.length) {
        profileIndex = 0;
    }
    fullName.innerHTML = profiles[profileIndex].name
    title.innerHTML = profiles[profileIndex].title
    text.innerHTML = profiles[profileIndex].text

    nextBtn.classList.add("activeBtn")
    prevBtn.classList.remove("activeBtn")
 
})

prevBtn.addEventListener("click", function () {
    imageIndex--
    if (imageIndex < 0) {
        imageIndex = images.length - 1
    }
    image.src = images[imageIndex];

    profileIndex--
    if (profileIndex < 0) {
        profileIndex = images.length - 1
    }
    fullName.innerHTML = profiles[profileIndex].name
    title.innerHTML = profiles[profileIndex].title
    text.innerHTML = profiles[profileIndex].text

    prevBtn.classList.add("activeBtn")
    nextBtn.classList.remove("activeBtn")
})


// btn.forEach(button => {
//     button.addEventListener('click', () => {

//       btn.forEach(button => {
//         button.classList.remove('clicked');
//       });

//       button.classList.add('clicked');
//     });
//   });
