export default function pageLoad() {
    body.append(header);

//header
    const header = document.createElement('div');
    header.append(nav);

    // inside header
        const nav = document.createElement('div');
        nav. append(home_paragraph, menu_paragraph, contact_paragraph);


        // tab 1 (left)
        const home_tab = document.createElement('div');
            const home_paragraph = document.createElement('p');

        //tab 2 (middle)
        const menu_tab = document.createElement('div');
            const menu_paragraph = document.createElement('p');

        // tab 3 (right)
        const contact_tab = document.createElement('div');
            const contact_paragraph = document.createElement('p');
};

// on load
//  function firstLoad() {
//  window.onload
//     *home_tab active*
// };