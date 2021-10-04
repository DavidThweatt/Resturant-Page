export function loadHeader() {
    const mainHeader = document.getElementById('header');

        // inside header

            // tab 1 (left)
            const home_tab = document.createElement('div');
            home_tab.setAttribute('id','home');
                const home_paragraph = document.createElement('p');
                    home_paragraph.textContent = "Home";

                    home_tab.append(home_paragraph);

            //tab 2 (middle)
            const menu_tab = document.createElement('div');
            menu_tab.setAttribute('id','menu');
                const menu_paragraph = document.createElement('p');
                    menu_paragraph.textContent = "Menu";

                    menu_tab.append(menu_paragraph);

            // tab 3 (right)
            const contact_tab = document.createElement('div');
            contact_tab.setAttribute('id','contact');
                const contact_paragraph = document.createElement('p');
                    contact_paragraph.textContent = "Contact";

                    contact_tab.append(contact_paragraph);

        const nav = document.createElement('div');
        nav.append(home_tab, menu_tab, contact_tab);

        //header
        const header1 = document.createElement('div');
        header.append(nav);

        mainHeader.append(header1);
};