// 스킬바 애니메이션

window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".fill");

    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";

        setTimeout(() => {
            bar.style.transition = "1.5s ease";
            bar.style.width = width;
        }, 300);
    });
});