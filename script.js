
const grid_container = document.querySelector(".grid-container");



function generate_grid (input) {
    grid_container.style.cssText = `
    display: grid;   
    grid-template-columns: repeat(${input},1fr);
    grid-template-rows: repeat(${input},1fr);
    `
    

    for (let i = 0; i < Math.pow(input, 2); i++) {
        div_element = document.createElement("div")
        div_element.classList.add("grid-item");
        grid_container.appendChild(div_element);
    }
}

generate_grid(16)

const all_grid_items = document.querySelectorAll(".grid-item");

grid_container.addEventListener("onclick", () => {
    grid_container.style.backgroundColor = "black";
})



// TODO Button on top to clear the grid and ask for a new one with number of columns and rows

