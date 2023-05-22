const successBtn = document.querySelector(".successBtn");
const errorBtn = document.querySelector(".errorBtn");
const warningBtn = document.querySelector(".warningBtn");
const listContainer = document.querySelector(".list-container");
const btn = document.querySelectorAll(".btn");


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        const li = document.createElement("div");
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-circle-check');
        icon.style.color = "#A4D0A4"

        let message = listContainer.getAttribute("data-message")
        li.innerHTML = message;

        li.insertBefore(icon, li.firstChild)

        listContainer.appendChild(li);

        let dataPosition = listContainer.getAttribute("data-position")

        switch (dataPosition) {
            case "top":
                listContainer.classList.add("list-container-top")
                break;
            case "bottom":
                listContainer.classList.add("list-container-bottom")
                break;
            case "right":
                listContainer.classList.add("list-container-right")
                break;
            default:
                listContainer.classList.add("list-container-left")
                break;
        }

        timeoutId = setTimeout(function () {
            li.classList.add("hide");
        }, 3000);

        if (event.target.matches('.errorBtn')) {
            message = listContainer.getAttribute("data-message2")
            li.innerHTML = message;
            icon.setAttribute('class', 'fa-solid fa-xmark');
            icon.style.color = "#F45050"
            li.insertBefore(icon, li.firstChild)
        } else if (event.target.matches('.warningBtn')) {
            message = listContainer.getAttribute("data-message3")
            li.innerHTML = message;
            icon.setAttribute('class', 'fa-solid fa-triangle-exclamation');
            icon.style.color = "#F9D949"
            li.insertBefore(icon, li.firstChild)
        }
    });
}




