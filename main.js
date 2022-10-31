// HAMBURGER_MENU
let navStatus = false;
const navList = document.querySelector(".nav-list");
let mediaQuery = window.matchMedia("(min-width: 760px)");
let navHide = (navList.style.left = "-100%");


    const navToggle = document.querySelector('.menu').addEventListener('click', (menu) =>
    {
     
          switch (navStatus) {
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
    const darkMode = document.getElementById('dark-mode');
    const moonIcon = document.querySelector(".bg-dark");
    const sunIcon = document.querySelector(".bg-light");
    let toggleStatus = true;
        darkMode.addEventListener('click', () => {
            document.body.classList.toggle("dark-theme");
            // document.body.classList.contains('dark-theme')
            if (toggleStatus == true) {
                moonIcon.style.left = '-121%';
                sunIcon.style.left = "-65%";
                console.log('True');
                toggleStatus = false;
            } else {
                moonIcon.style.left = "16%";
                sunIcon.style.left = "125%";
                console.log('False');
                toggleStatus = true;
            }
        });