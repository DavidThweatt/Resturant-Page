export function createMenuPage() {
    const div_content = document.getElementById('content');

    // inside content div
    

    

        // div 1 (top)
        const menu_h1 = document.createElement('H1');
            menu_h1.textContent += "Menu";

        // div 2 
        const meal1_container = document.createElement('div');
            const meal1_paragraph = document.createElement('p');
                meal1_paragraph.textContent += "Burger & Fries";

            meal1_container.append(meal1_paragraph);

        // div3
        const meal2_container = document.createElement('div');
            const meal2_paragraph = document.createElement('p');
                meal2_paragraph.textContent += "Ice cream & donuts";

            meal2_container.append(meal2_paragraph);

        // div 4 (bottom)
        const meal3_container = document.createElement('div');
            const meal3_paragraph = document.createElement('p');
                meal3_paragraph.textContent += "Pizza";

            meal3_container.append(meal3_paragraph);


            const menu_div_container = document.createElement('div');
            menu_div_container.append(menu_h1, meal1_container, meal2_container, meal3_container);

            div_content.append(menu_div_container);
}