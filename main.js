// HAMBURGER_MENU
let navStatus = false;
const navList = document.querySelector(".nav-list");
let navHide = (navList.style.left = "-100%");
    const navToggle = document.querySelector('.menu').addEventListener('click', (menu) =>
    {
        switch (navStatus){

            case false:
                navList.style.left = "0";
                navStatus = true;
                break;
                
            case true:
                navList.style.left = "-100%";
                navStatus = false;
                break;
        
        } 
    });

// DARK_MODE

let dark = false;
let bgLight = document.querySelector('.bg-light');
    bgLight.style.opacity = '0';
let bgdark = document.querySelector(".bg-dark");
const main = document.querySelector(".main");

    const darkMode = document.querySelector(".dark-mode")
    darkMode.addEventListener("click", () => {
        switch (dark) {
          case false:
            main.style.backgroundColor = "#333333";
            main.style.opacity = "1";
            bgdark.style.left = '-15%'
            bgdark.style.opacity = "0";
            bgLight.style.opacity = '1';
            bgLight.style.left = "-63%";
            bgLight.style.color = "#eeee";
            darkMode.style.border = '1px solid #eeee'
            dark = true;
            break;

          case true:
            main.style.opacity = "1";
            main.style.backgroundColor = "#eeee";
            bgLight.style.left = "0";
            bgdark.style.left = "0%";
            bgLight.style.opacity = "0";
            bgdark.style.opacity = "1";
            darkMode.style.border = "1px solid #333333";
            dark = false;
            break;
        }
      });