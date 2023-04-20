const cursorDot = document.querySelector("[script-cursor-dot]");
const cursorOutline = document.querySelector("[script-cursor-outline]");
window.addEventListener("mousemove", function (e){
    const x = e.clientX;
    const y = e.clientY;

    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;

    cursorOutline.animate({
        left: `${x}px`,
        top: `${y}px`
    }, {duration: 500, fill: "forwards"});
});