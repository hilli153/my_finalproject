document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.classList.toggle("active");
    });
});

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}