
const typed = new Typed(".designation", {
    strings: ['Frontend Developer', 'Web Developer', 'C++ Programmer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    showCursor: true, 
    cursorChar: '>',  
});

const pageUpBtn = document.getElementByClassName("page-up-button");
window.onscroll = function () {
            if (document.documentElement.scrollTop <= 50) {
                pageUpBtn.style.display = "none"; 
            } 
};

window.onload = function () {
    window.location.href = "#";
};

document.addEventListener("DOMContentLoaded", function () {
    const me = document.querySelector(".me");
  
    me.addEventListener("mousemove", (e) => {
      const rect = me.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; 
      const y = (e.clientY - rect.top) / rect.height - 0.5; 
      const rotateX = y * 30; 
      const rotateY = x * -30; 
  
      me.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)  `;
    });
  
    me.addEventListener("mouseleave", () => {
      me.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset on leave
    });
  });
  





