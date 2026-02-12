function register() {
    alert("Registration will open soon!");
}
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        preloader.style.display = "none";
        mainContent.style.display = "block";
    }, 2000);
});
