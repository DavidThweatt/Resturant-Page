export function createContactsPage() {

    const div_content = document.getElementById('content');

    // inside content div
    
        // div 1 (top)
        const contact_h1 = document.createElement('H1');
        contact_h1.setAttribute('class', 'tops');
            contact_h1.textContent += "Contact us";

        // div 2 
        const contact_info_container = document.createElement('div');
        contact_info_container.setAttribute('class', 'content-Div');
            const contact_info_paragraph = document.createElement('p');
            contact_info_paragraph.setAttribute('class', 'Para');
                contact_info_paragraph.textContent += "800-000-000";
            contact_info_container.append(contact_info_paragraph);

        // div3
        const owner_container = document.createElement('div');
        owner_container.setAttribute('class', 'content-Div');
            const owner_paragraph = document.createElement('p');
            owner_paragraph.setAttribute('class', 'Para');
                owner_paragraph.textContent += "The Wife and I";

            owner_container.append(owner_paragraph);

        // div 4 (bottom)
        const picture_container = document.createElement('div');
        picture_container.setAttribute('class', 'content-Div');
            const family_img = document.createElement('img');
            
            family_img.src = '/family.jpeg';

            const picture_paragraph = document.createElement('p');
            picture_paragraph.setAttribute('class', 'Para');
                picture_paragraph.textContent += "The family"

            picture_container.append(family_img, picture_paragraph);


            const contact_div_container = document.createElement('div');
            contact_div_container.append(contact_h1, contact_info_container, owner_container, picture_container);
            
            contact_div_container.classList.add('tab-content');
            contact_div_container.setAttribute('id', 'ContactPage');

            div_content.append(contact_div_container);
};