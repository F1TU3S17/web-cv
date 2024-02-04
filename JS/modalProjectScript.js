const modalProject = document.querySelector(".modal-project");
const modalImages = document.querySelector(".project-photo-content");
const modalTexts = document.querySelector(".project-text-content");
const table = document.querySelector(".project-table");
const buttons = document.querySelectorAll(".button-project");
const out = document.querySelector(".X-modal-project");

let arrImages = ["<img src=\"/image/tagan-map.png\" title=\"Я не рисователь карт\" alt=\"Taganrog map\"></img>" , 
"<img src=\"/image/mops-tamogo4i.jpg\" title=\"Да это реально сделал первый курс!\" alt=\"game-photo\"></img>",
"<img src=\"/image/evraz.jpg\" title=\"Араб нам все заруинил(\" alt=\"web-prototype\"></img>",
];
let arrTexts = ["<p>Самый первый сколь-либо серьезный проект в вузе - это веб-приложение для экскурсий по городу Таганрог.<br><br> Проект был разработан в рамках учебного задания по созданию виртуального музея города Таганрог.<br> Мы с командой выбрали несколько улиц в культурном центре города, чтобы рассказать о них.</p>",
"<p>Это был мой первый хакатон.<br>Было столько эмоций... Не передать словами...<br><br> Если говорить о проетке. Мы разработали свой вариант таммогочи(Мопса).Его можно кормить,поить и гладить, в общем все то, что можно делать с первокурсником кафедры МОП ЭВМ ))) <br><br>Номинация от ООО «Центр исследований и разработки» – лучшая презентация прототипа решения<br> — команда Мопсы (Таганрог), приз – 20 000 рублей. </p>",
"<p>Это мой второй хакатон,тут нашей команде повезло меньше,так как был \"Араб\",который сделал зачем-то авиасэйлс для поездов )<br><br> Но я считаю, что мы выступили достойно и сделали очень красивый сайт. </p>"
];


for (let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener("click",function(){
        modalProject.style.display = "block";
        modalBack.style.display = "block";
        modalImages.innerHTML = arrImages[i];
        modalTexts.innerHTML = arrTexts[i];
    });
}



out.addEventListener("click",function(){
    modalProject.style.display = "none";
    modalBack.style.display = "none";

});



