
import { createHomePage } from "./homepage";
import { createMenuPage } from "./menu";
import { createContactsPage } from "./contact";
import { loadHeader } from "./page_load"

const home_tab = document.getElementById('home');
const menu_tab = document.getElementById('menu');
const contact_tab = document.getElementById('contact');

loadHeader();
createHomePage();

    // // event listeners
    // home_tab.addEventListener('click', myHome);
    // menu_tab.addEventListener('click', myMenu);
    // contact_tab.addEventListener('click', myContact);
  



// function setActiveTabs(tab) {
//     const tabs = document.querySelectorAll(".button-nav");
  
//     tab.forEach((tab) => {
//       if (tab !== this) {
//         tab.classList.remove("active");
//       }
//     });
  
//     tab.classList.add("active");
//   }

    