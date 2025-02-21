
const typed = new Typed(".designation", {
  strings: ['Frontend Developer', 'Web Developer', 'C++ Programmer'],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
  showCursor: true,
  cursorChar: '>',
});

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

let btn = document.getElementById('theme-btn')
let istoggled = false;

btn.addEventListener('click', function () {
  if (istoggled) {
    document.documentElement.style.setProperty("--textcolor", "grey");
    document.documentElement.style.setProperty("--headcolor", "black");
    document.documentElement.style.setProperty("--bgcolor", "white");

  }

  else {
    document.documentElement.style.setProperty("--textcolor", "rgb(165, 161, 161)");
    document.documentElement.style.setProperty("--headcolor", "white");
    document.documentElement.style.setProperty("--bgcolor", "linear-gradient(to left,rgba(7, 7, 7, 0.94),rgba(16, 15, 15, 0.923))");
  }
  istoggled = !istoggled;
});


document.querySelector('.contact-form').addEventListener('submit', function () {
  alert(" Do you wish to submit the details to admin!!");
});







