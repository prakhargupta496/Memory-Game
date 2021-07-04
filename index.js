const grid = document.querySelector(".grid");
const imgArr = [
{
    name: "crash",
    src: "./images/crash.png"
},
{
    name: "kick",
    src: "./images/kick.png"
},
{
    name: "snare",
    src: "./images/snare.png"
},
{
    name: "tom1",
    src: "./images/tom1.png"
},
{
    name: "tom2",
    src: "./images/tom2.png"
},
{
    name: "crash",
    src: "./images/crash.png"
},
{
    name: "kick",
    src: "./images/kick.png"
},
{
    name: "snare",
    src: "./images/snare.png"
},
{
    name: "tom1",
    src: "./images/tom1.png"
},
{
    name: "tom2",
    src: "./images/tom2.png"
}];

imgArr.sort(() => Math.random() - 0.5);



function createGrid(){
    for(let i=0;i<imgArr.length;i++){
        const cell = document.createElement("img");
        cell.setAttribute('src',imgArr[i].src);
        cell.style.width = "60px";
        cell.style.height = "60px";
        //cell.addEventListener("click",);
        grid.appendChild(cell);
    }
}

createGrid();