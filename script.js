
const grid_container = document.querySelector(".grid-container");
const ui = document.querySelector(".UI");
const wrapper = document.querySelector(".wrapper");
const default_value = 16;
const clearBttn = document.querySelector("#clear");
let brush_input = document.querySelector("#brush-color")
let cols = document.querySelector("#cols-num");
let rows = document.querySelector("#rows-num");



function generate_grid (rows = default_value,cols = default_value) {
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild)
    }
    grid_container.style.cssText = `
    display: grid;   
    grid-template-columns: repeat(${cols},1fr);
    grid-template-rows: repeat(${cols},auto);
    `
    

    for (let i = 0; i < cols*rows; i++) {
        div_element = document.createElement("div")
        div_element.classList.add("grid-item");
        grid_container.appendChild(div_element);
    }
}

generate_grid(16)



const all_grid_items = document.querySelectorAll(".grid-item");

cols.addEventListener("oninput", generate_grid(+rows.value, +cols.value))
cols.addEventListener("oninput", generate_grid(+rows.value, +cols.value))
brush_input.addEventListener("change", brush_color(brush_input.value));


function brush_color (color) {
    all_grid_items.forEach((grid_item) => {
        grid_item.addEventListener("mouseenter", () =>  {
            grid_item.style.backgroundColor = color;
        })
    })
}


function clear() {
    all_grid_items.forEach((grid_item) => {
        clearBttn.addEventListener("click", () =>{
            grid_item.style.backgroundColor = "white"
        })
    })
}

clear()




// TODO Button on top to clear the grid and ask for a new one with number of columns and rows

