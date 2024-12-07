const carousel = document.querySelector(".carrusel");
const arrowBtns = document.querySelectorAll("#carrusel_videos i");
const firstCardWidht = carousel.querySelector(".video_card").offsetWidth;

let isDragging = false, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidht : firstCardWidht;
    })
})

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
