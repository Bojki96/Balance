async function animateBackgroundImages(num) {
  var images = document.getElementsByClassName("Slider-slide");

  if (num > images.length - 1) {
    images[images.length - 1].style.opacity = 0;
    num = 0;
  } else if (num > images.length - 2) {
    for (let i = 0; i < num; i++) {
      images[i].style.opacity = 0;
    }
  }
  images[num].style.opacity = 1;
  num += 1;
  setTimeout(animateBackgroundImages, 7500, num);
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementsByClassName("checkbox")[0]
    .addEventListener("click", function () {
      let checked = document.getElementsByClassName("checkbox")[0].checked;
      let linearGradient =
        document.getElementsByClassName("overlay-gradient")[0];
      if (checked) {
        document.getElementsByClassName(
          "Slider-content-inner"
        )[0].style.opacity = 0;
        document.getElementsByTagName("h2")[0].style.opacity = 0;
        linearGradient.style.width = "100rem";
      } else {
        document.getElementsByClassName(
          "Slider-content-inner"
        )[0].style.opacity = 1;
        document.getElementsByTagName("h2")[0].style.opacity = 1;
        linearGradient.style.width = "0rem";
      }
    });
});

document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;
  let weightLossShow = document.getElementsByClassName("overview-container");
  let weightLossText = document.getElementsByClassName("overview-text");
  let overviewNodes = [];
  let textNodes = [];
  for (let i = 0; i < weightLossShow.length; i++) {
    overviewNodes.push(weightLossShow[i]);
  }
  for (let i = 0; i < weightLossText.length; i++) {
    textNodes.push(weightLossText[i]);
  }
  if (
    window.scrollY > overviewNodes[0].offsetTop
    // + overviewNodes[0].offsetHeight
  ) {
    overviewNodes[0].classList.add("animate-height");
    textNodes[0].classList.add("animate-text-opacity");
    overviewNodes[0].animate(
      [
        // keyframes
        // { borderTopColor: 'transparent'},
        { borderTopColor: "red" },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: "forwards",
      }
    );
  }
  if (
    window.scrollY > overviewNodes[1].offsetTop
    //+ overviewNodes[1].offsetHeight
  ) {
    overviewNodes[1].classList.add("animate-height");
    textNodes[1].classList.add("animate-text-opacity");
    overviewNodes[1].animate([{ borderTopColor: "white" }], {
      duration: 1000,
      iterations: 1,
      fill: "forwards",
    });
  }
  if (
    window.scrollY > overviewNodes[2].offsetTop
    //+ overviewNodes[2].offsetHeight
  ) {
    overviewNodes[2].classList.add("animate-height");
    textNodes[2].classList.add("animate-text-opacity");
    overviewNodes[2].animate([{ borderTopColor: "yellow" }], {
      duration: 1000,
      iterations: 1,
      fill: "forwards",
    });
  }
  if (
    window.scrollY > overviewNodes[3].offsetTop
    //+ overviewNodes[3].offsetHeight
  ) {
    overviewNodes[3].classList.add("animate-height");
    textNodes[3].classList.add("animate-text-opacity");
    overviewNodes[3].animate([{ borderTopColor: "rgb(29, 106, 207)" }], {
      duration: 1000,
      iterations: 1,
      fill: "forwards",
    });

    let fitApps = document.getElementsByClassName("fit-apps");
    let delayAnimation = 1500;
    for (let i = 0; i < fitApps.length; i++) {
      fitApps[i].animate([{ opacity: 1 }], {
        duration: 1500,
        delay: delayAnimation,
        iterations: 1,
        fill: "forwards",
      });
      delayAnimation += 500;
    }
  }
});

document.getElementById("package").addEventListener("click", () => {
  let packages = document.getElementById("packages").children;
  document.getElementById("package").style.display = "none";
  let delayAnimation = 300;
  for (let i = 0; i < packages.length; i++) {
    packages[i].style.display = "block";
    packages[i].animate([{ opacity: 1 }], {
      duration: 1500,
      delay: delayAnimation,
      iterations: 1,
      fill: "forwards",
    });
    delayAnimation += 500;
  }
  document.getElementById("subscribe").style.display = "block";
});

let packages = document.getElementById("packages").children;
for (let i = 0; i < packages.length; i++) {
  packages[i].addEventListener("click", () => {
    packages[i].style.background = "none";
    packages[i].style.backgroundColor = "white";
    chosenPackage(i);
  });
}

function chosenPackage(chosenPackageNumber) {
  for (let i = 0; i < packages.length; i++) {
    if (i != chosenPackageNumber) {
      packages[i].style.background =
        "linear-gradient(to right, white 50%, red 50%)";
      packages[i].style.backgroundSize = "200% 100%";
      packages[i].style.backgroundPosition = "right";
      packages[i].style.backgroundColor = "none";
    }
  }
}

// let choose = document.getElementsBy;
// for(let i = 0; i < choose.length; i++){

//   choose[i].addEventListener('click', ()=>{
//     choose[i].style.fontSize = '25px';
//   });
// }

let icons = document.getElementsByClassName("social_footer_ul")[0];
let borderColor = ["red", "#4267B2", "#E1306C", "#2867B2", "yellow"];
for (let i = 0; i < 5; i++) {
  icons.children[i].addEventListener("mouseover", () => {
    icons.children[i].children[0].style.borderColor = borderColor[i];
  });
  icons.children[i].addEventListener("mouseout", () => {
    icons.children[i].children[0].style.borderColor = "#CCC";
  });
}

function goToFooter() {
  window.scrollTo(0, document.body.scrollHeight);
  let footerColor = document.getElementsByClassName("social_footer_ul")[0];
  footerColor.animate([{ border: "#ff0000 solid 2px" }], {
    duration: 1000,
    iterations: 2,
    fill: "backwards",
  });
}
