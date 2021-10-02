
export default function creatHomePage(){

    const div_content = document.getElementById('content');
    // inside content div
    div_content.append(home_div_container);

    const home_div_container = document.createElement('div');
    home_div_container.append(restaurant_name, info_container, hours_container, location_container);

        // div 1 (top)
        const restaurant_name = document.createElement('H1');

        // div 2 
        const info_container = document.createElement('div');
            const info_paragraph = document.createElement('p');
            info_container.append(info_paragraph);

        // div3
        const hours_container = document.createElement('div');
            const hours_paragraph = document.createElement('p');
            hours_container.append(hours_paragraph)

        // div 4 (bottom)
        const location_container = document.createElement('div');
            const location_paragraph = document.createElement('p');
            location_container.append(location_paragraph);

};
