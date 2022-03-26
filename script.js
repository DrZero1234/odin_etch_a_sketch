
const grid_container = document.querySelector(".grid-container");
const ui = document.querySelector(".user-interface");
const wrapper = document.querySelector(".wrapper");
const default_value = 16;
const clearBttn = document.querySelector("#clear");
let brush_input = document.querySelector("#brush-color")
let cols = document.querySelector("#cols-num");
let rows = document.querySelector("#rows-num");
const all_btns = ui.querySelectorAll("button:not(#clear)");

console.log(Array.from(all_btns).map(item => item.className))


// TODO Instead of regenerating just append new cols or rows to exisiting grid

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



// Button toggler - Only one button can be active

all_btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "active") {
            button.className = "inactive" 
        } else {
            Array.from(all_btns).map(item => item.className = "inactive")
            button.className = "active"
        }
    })
})






cols.addEventListener("change", function () {
    generate_grid(Math.floor(cols.value), Math.floor(this.value))
    brush_event()
    clear()
    
})
rows.addEventListener("change", function () {
    generate_grid(Math.floor(this.value), Math.floor(rows.value))
    brush_event()
    clear()
})


function brush_event() {
    const all_grid_items = document.querySelectorAll(".grid-item"); 
all_grid_items.forEach((grid_item) => {
    grid_item.addEventListener("mouseenter", () =>  {
        grid_item.style.backgroundColor = brush_input.value;
    })
})
}




function clear() {
    const all_grid_items = document.querySelectorAll(".grid-item");
    all_grid_items.forEach((grid_item) => {
        clearBttn.addEventListener("click", () =>{
            grid_item.style.backgroundColor = "white"
        })
    })
}

generate_grid()
brush_event()
clear()



// TODO Button on top to clear the grid and ask for a new one with number of columns and rows

