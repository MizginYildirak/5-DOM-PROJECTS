const dropdownWrapper = document.querySelector(".dropdown-input")
const hiddenRowItem = document.querySelector(".hidden-row-item")
const container = document.querySelector(".container")
const maleListItem = document.querySelector(".male-list-item");
const femaleListItem = document.querySelector(".female-list-item")
const noteInput = document.querySelector(".note-input")
const listItem = document.querySelectorAll(".list-item")
const genderItem = document.querySelector(".gender-item")
const submitBtn = document.querySelector(".submit")
const genderText = document.querySelector(".gender-text")

dropdownWrapper.addEventListener("click", function () {
    dropdownWrapper.classList.toggle("is-active")
})

function customizeGender() {
    hiddenRowItem.classList.remove("none")
    hiddenRowItem.classList.add("flex")
    dropdownWrapper.classList.remove("is-active")
    noteInput.value = "Hi, there!"
    genderItem.value = "other"
}

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", function () {
        if (event.target.matches(".male-list-item")) {
            noteInput.value = "Hi, man!"
            genderItem.value = "male"
            dropdownWrapper.classList.remove("is-active")
            hiddenRowItem.classList.remove("flex")
            hiddenRowItem.classList.add("none")
        } else if (event.target.matches(".female-list-item")) {
            noteInput.value = "Hi, lady!"
            genderItem.value = "female"
            dropdownWrapper.classList.remove("is-active")
            hiddenRowItem.classList.remove("flex")
            hiddenRowItem.classList.add("none")
        }
    })
}

let warningGender = document.querySelector(".warning-gender")

submitBtn.addEventListener("click", () => {
    if (genderText.value === "") {
        genderText.style.border = "1px solid red"
        warningGender.innerText = "Please insert Customize Gender"
        warningGender.style.color = "red"
    } else {
        genderText.style.border = "1px solid black"
    }
})

removeWarningGender()

function removeWarningGender() {
    genderText.addEventListener("keydown", (event) => {
        if (genderText.value) {
            genderText.style.border = "1px solid black"
            warningGender.innerHTML = ""
        }
    })
}
