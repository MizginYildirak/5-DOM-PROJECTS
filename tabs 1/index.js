const tabs = document.querySelectorAll(".tab")
console.log(tabs)
const text = document.querySelector(".text")
const line = document.querySelector(".line")

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(event) {
        if (event.target.matches(".tab1")) {
            text.innerHTML = "Content of Tab 1"
            line.style.left = "0px"
        } else if (event.target.matches(".tab2")) {
            text.innerHTML = "Content of Tab 2"
            line.style.left = "60px"
        } else if (event.target.matches(".tab3")) {
            text.innerHTML = "Content of Tab 3"
            line.style.left = "120px"
        } 
    })
}
