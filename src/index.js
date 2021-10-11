import { createHomePage } from "./homepage";
import { createMenuPage } from "./menu";
import { createContactsPage } from "./contact";
import { loadHeader } from "./page_load"



loadHeader();
createHomePage();
createMenuPage();
createContactsPage();



window.onload = function(){

    const home_tab = document.getElementById('home');
    const menu_tab = document.getElementById('menu');
    const contact_tab = document.getElementById('contact');

    const home_Page = document.getElementById('HomePage');
    const menu_Page = document.getElementById('MenuPage');
    const contact_Page = document.getElementById('ContactPage');

    const tabs = document.getElementsByClassName("tab-target");
    

    
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");

            if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
            }

            this.className += " active";
            
            
            switchContent()
        });
        
    };

    function switchContent() {

        if (home_tab.classList.contains('active')) {
           ((home_Page.className = " active") && (menu_Page.className = " hidden") && (contact_Page.className = " hidden")); 
           
        } else if (menu_tab.classList.contains('active')) {
            ((menu_Page.className = " active") && (home_Page.className = " hidden") && (contact_Page.className = " hidden")); 
           
        } else if (contact_tab.classList.contains = ('active')) {
            ((contact_Page.className = " active") && (menu_Page.className = " hidden") && (home_Page.className = " hidden")); 
            
        };
        };
};