
export function createHomePage(){
    const div_content = document.getElementById('content');

    // inside content div

        // div 1 (top)
        const restaurant_name = document.createElement('H1');
        restaurant_name.setAttribute('class', 'tops');
            restaurant_name.textContent = "Belle's Belly";

        // div 2 
        const info_container = document.createElement('div');
        info_container.setAttribute('class', 'content-Div');
            const info_paragraph = document.createElement('p');
            info_paragraph.setAttribute('class', 'Para');
                info_paragraph.textContent = "Best damn food there is!";

            info_container.append(info_paragraph);

        // div3
        const hours_container = document.createElement('div');
        hours_container.setAttribute('class', 'content-Div');
            const hours_paragraph = document.createElement('p');
            hours_paragraph.setAttribute('class', 'Para');
                hours_paragraph.textContent = "6am - 6pm";

            hours_container.append(hours_paragraph);

        // div 4 (bottom)
        const location_container = document.createElement('div');
        location_container.setAttribute('class', 'content-Div');
            const location_paragraph = document.createElement('p');
            location_paragraph.setAttribute('class', 'Para');
                location_paragraph.textContent = "Odin lane, Asgard";

            location_container.append(location_paragraph);


            const home_div_container = document.createElement('div');
            home_div_container.append(restaurant_name, info_container, hours_container, location_container);

            home_div_container.classList.add('tab-content');
            home_div_container.setAttribute('id', 'HomePage');

            div_content.append(home_div_container);
};
