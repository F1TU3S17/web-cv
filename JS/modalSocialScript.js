const leftPanel = document.querySelector(".left-panel");
const logo = document.querySelector("#logo");

let f = 0;

logo.addEventListener("click", () => {
    if (f == 0) {
        leftPanel.style.display = "Block";
        leftPanel.style.animation = "toGo 1s ease-in-out forwards";
        f = 1;
    }
    else {
        leftPanel.style.animation = "toBack 1s ease-in-out forwards";
        f = 0;
    };
});

