const grid = document.querySelector(".grid");

function createGrid(){
    for(let i=0;i<20;i++){
        const cell = document.createElement("img");
        cell.setAttribute('src','./images/crash.png');
        cell.style.width = "60px";
        cell.style.height = "60px";
        grid.appendChild(cell);
    }
    for(let i=0;i<20;i++){
        const cell = document.createElement("img");
        cell.setAttribute('src','./images/kick.png');
        cell.style.width = "60px";
        cell.style.height = "60px";
        grid.appendChild(cell);
    }
}

createGrid();