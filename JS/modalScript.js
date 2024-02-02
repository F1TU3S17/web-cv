//modal
const but = document.querySelector(".button-my-photo");
const modal = document.querySelector(".modal-continer");
const modalBack = document.querySelector(".modal-background");
const modalPhotoCont = document.querySelector(".modal-photos-cont");
const x = document.querySelector(".X");
const lButton = document.querySelector(".left-button");
const rButton = document.querySelector(".right-button");

but.addEventListener("click", () => {
    modal.style.display = "block";
    modalBack.style.display = "block";
});
x.addEventListener("click", () => {
    modal.style.display = "none";
    modalBack.style.display = "none";
});

let countPhotoContChildren = modalPhotoCont.children.length;
let i = 0;
lButton.addEventListener("click", () => {
    if ((i - 1) == -1) {
        modalPhotoCont.children[i].style.display = "none";
        i = countPhotoContChildren - 1;
        modalPhotoCont.children[i].style.display = "block";
    }
    else {
        modalPhotoCont.children[i].style.display = "none";
        i--;
        modalPhotoCont.children[i].style.display = "block";
    }

});

rButton.addEventListener("click", () => {
    if ((i + 1) == countPhotoContChildren) {
        modalPhotoCont.children[i].style.display = "none";
        i = 0;
        modalPhotoCont.children[i].style.display = "block";
    }
    else {
        modalPhotoCont.children[i].style.display = "none";
        i++;
        modalPhotoCont.children[i].style.display = "block";
    }

});
