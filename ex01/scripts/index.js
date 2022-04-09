const images = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

images.forEach((imgDiv) => {
    imgDiv.addEventListener("click", function() {
        console.log("bilo sta napisat", imgDiv.children[0].src);
        modalImg.src = imgDiv.children[0].src;
        modalTxt.innerHTML = imgDiv.children[0].alt;
        modal.classList.add("appear");
      
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});