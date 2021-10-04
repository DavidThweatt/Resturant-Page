
export function createHomePage(){
    const div_content = document.getElementById('content');

    // inside content div

        // div 1 (top)
        const restaurant_name = document.createElement('H1');
        restaurant_name.setAttribute('id', 'name');
            restaurant_name.textContent = "Belle's Belly";

        // div 2 
        const info_container = document.createElement('div');
        info_container.setAttribute('id', 'info');
            const info_paragraph = document.createElement('p');
                info_paragraph.textContent = "Best damn food there is!";

            info_container.append(info_paragraph);

        // div3
        const hours_container = document.createElement('div');
        hours_container.setAttribute('id', 'hours');
            const hours_paragraph = document.createElement('p');
                hours_paragraph.textContent = "6am - 6pm";

            hours_container.append(hours_paragraph);

        // div 4 (bottom)
        const location_container = document.createElement('div');
        location_container.setAttribute('id', 'location');
            const location_paragraph = document.createElement('p');
                location_paragraph.textContent = "Odin lane, Asgard";

            location_container.append(location_paragraph);


            const home_div_container = document.createElement('div');
            home_div_container.append(restaurant_name, info_container, hours_container, location_container);


            div_content.append(home_div_container);
};
