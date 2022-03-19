
const grid_container = document.querySelector(".grid-container");
const ui = document.querySelector(".UI");
clrBttn = document.createElement("button")
clrBttn.innerText = "Clear";
ui.appendChild(clrBttn);
clearBttn = document.querySelector("button");

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


color_prompt = prompt("Enter a color: ","");

all_grid_items.forEach((grid_item) => {
    clearBttn.addEventListener("click", () =>{
        grid_item.style.backgroundColor = "white"
    })
    grid_item.addEventListener("mouseenter", () =>  {
        grid_item.style.backgroundColor = color_prompt.toLowerCase();
    })
})



// TODO Button on top to clear the grid and ask for a new one with number of columns and rows

