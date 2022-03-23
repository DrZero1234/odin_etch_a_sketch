
const grid_container = document.querySelector(".grid-container");
const ui = document.querySelector(".UI");
const wrapper = document.querySelector(".wrapper");
const default_value = 16;
const clearBttn = document.querySelector("#clear");
let brush_input = document.querySelector("#brush-color")
let cols = document.querySelector("#cols-num");
let rows = document.querySelector("#rows-num");



function generate_grid (rows = default_value,cols = default_value) {

    // Resets the grid container

    
    while (grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild)
    }
    grid_container.style.cssText = `
    display: grid;   
    grid-template-columns: repeat(${cols},1fr);
    grid-template-rows: repeat(${rows},1fr);
    `
    

    for (let i = 0; i < cols*rows; i++) {
        div_element = document.createElement("div")
        div_element.classList.add("grid-item");
        grid_container.appendChild(div_element);
    }
    console.log("Grid generated")
}






cols.addEventListener("input", function () {
    generate_grid(Math.floor(cols.value), Math.floor(this.value))
    
})
rows.addEventListener("input", function () {
    generate_grid(Math.floor(this.value), Math.floor(rows.value))
})

const all_grid_items = document.querySelectorAll(".grid-item");

all_grid_items.forEach((grid_item) => {
    grid_item.addEventListener("mouseenter", () =>  {
        grid_item.style.backgroundColor = brush_input.value;
    })
})



function clear() {
    all_grid_items.forEach((grid_item) => {
        clearBttn.addEventListener("click", () =>{
            grid_item.style.backgroundColor = "white"
        })
    })
}

clear()

generate_grid(default_value,default_value)


// TODO Button on top to clear the grid and ask for a new one with number of columns and rows

