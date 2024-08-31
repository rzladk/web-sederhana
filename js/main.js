const nav = document.querySelector("nav ul");
nav.addEventListener("click", (event) => {
    // ketika di klik berubah warna
    event.target.style.backgroundColor = "green";
});

nav.addEventListener("dblclick", (event) => {
    // ketika di klik berubah warna
    event.target.style.color = "black";
});




