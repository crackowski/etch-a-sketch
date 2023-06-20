function randomRGB(){
    return Math.floor(Math.random() * 255);
}

function gridSelector(){
    let container = document.querySelector(".container");
    let gridSize = parseInt(prompt("Select a grid size from 1-100"));

    if(gridSize <= 100 && gridSize > 0){
        for(let i = 1; i <= gridSize; i++){
            let row = document.createElement("div")
            row.classList.add("row");
            container.appendChild(row);
            for(let j = 1; j <= gridSize; j++)
            {
                let div = document.createElement("div");
                div.classList.add("divs");
                row.appendChild(div);
            }
        }
    }
    
    let divs = document.querySelectorAll(".divs");

    divs.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "aqua";
        })
    });

    let reset = document.querySelector("button");

    reset.addEventListener("click", () => {
        divs.forEach(div => {
            div.style.backgroundColor = "white";
        });
    });

    let rainbow = document.querySelector(".rainbow");

    rainbow.addEventListener("click", () => {
    divs.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`
        })
    });
})
}
gridSelector();


let newGrid = document.querySelector(".new-grid");

newGrid.addEventListener("click", () => {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.remove();
    });
    gridSelector();
});


