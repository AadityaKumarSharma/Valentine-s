// script.js
document.getElementById("surpriseBtn").addEventListener("click", function() {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");

    if (!surprise.classList.contains("hidden")) {
        surprise.style.display = "block";
    } else {
        surprise.style.display = "none";
    }
});
