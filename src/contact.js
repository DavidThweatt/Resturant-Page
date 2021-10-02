export default function createContactsPage() {

    const div_content = document.getElementById('content');

    // inside content div
    div_content.append(contact_div_container);

    const contact_div_container = document.createElement('div');
    contact_div_container.append(contact_h1, contact_info_container, owner_container, picture_container);

        // div 1 (top)
        const contact_h1 = document.createElement('H1');

        // div 2 
        const contact_info_container = document.createElement('div');
            const contact_info_paragraph = document.createElement('p');
            contact_info_container.append(contact_info_paragraph);

        // div3
        const owner_container = document.createElement('div');
            const owner_paragraph = document.createElement('p');
            owner_container.append(owner_paragraph);

        // div 4 (bottom)
        const picture_container = document.createElement('div');
            const picture_paragraph = document.createElement('p');
            picture_container.append(picture_paragraph);
};