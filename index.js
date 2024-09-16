
const leftBox = document.querySelector(".box-one");
const rightBox = document.querySelector(".box-two");

const dragables = document.querySelectorAll(".drag");

console.log(dragables);

dragables.forEach((drag) => {
    drag.addEventListener("dragstart", (event) => {
        let selected = event.target;

        rightBox.addEventListener("dragover", (event) => {
            event.preventDefault();
        })
        rightBox.addEventListener("drop", () => {
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover", (event) => {
            event.preventDefault();
        })
        leftBox.addEventListener("drop", () => {
            leftBox.appendChild(selected);
            selected = null;
        })
    })
})
