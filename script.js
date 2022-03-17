const grid_container = document.querySelector(".grid-container");


function generate_gird () {
    for (let i = 0; i < 25*25; i++) {
        div_element = document.createElement("div")
        div_element.classList.add("grid-item");
        grid_container.appendChild(div_element); 
    }
    
}

