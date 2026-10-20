let inputField = document.getElementById("inputField");

let show = document.getElementById("show");

let hide = document.getElementById("hide");


show.addEventListener("click", () => {

    inputField.setAttribute('type', 'text');

    hide.style.display = "inline-block";
    show.style.display = "none";

})

hide.addEventListener("click", () => {

    inputField.setAttribute('type', 'password');

    show.style.display = "inline-block";
    hide.style.display = "none";

})