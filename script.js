let gridSpace = document.querySelector(".grid"),
    slider = document.querySelector(".slider"),
    colorID = 1;

//load the paintbrush:
gridMaker(slider.value);
paint();

function gridMaker() {
    gridSpace.innerHTML = "";
    gridSpace.setAttribute("style", `grid-template-columns:repeat(${slider.value}, 1fr); grid-template-rows:repeat(${slider.value}, 1fr)`)
    for (let i = 1; i <= slider.value**2; i++) {
        let eachSquare = document.createElement("div");
        eachSquare.setAttribute("class", "square");
        gridSpace.appendChild(eachSquare);    
    }
}

//colors
function color() {
    if (colorID == 1){                                                      //black
        this.setAttribute("style", "background: black");
    } else if (colorID == 2) {                                              //grayscale
        let opacity = Number(this.style.background.slice(-4, -1));
        if (opacity < 0.9){
           this.style.background = `rgba(0,0,0,${opacity += 0.1})`
           console.log(opacity)
        } else {this.style.background = `rgba(0,0,0,1)`}
    } else if (colorID == 3) {                                              //rainbow
        this.style.backgroundColor = `hsla(${Math.random() * 360}, 80%, 70%, 0.3)`;
    } else if (colorID == 4) {                                              //eraser
        this.style.backgroundColor = "rgba(255,255,255,0.01)";
    }
}

//slider
slider.addEventListener("mouseup", () => {
    gridMaker();
    paint();
});

//paintbrush
function paint() {
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mouseover", color)
    })
}

//color buttons
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        colorID = button.value;
    })
})

//clear
document.getElementById("clear").addEventListener("click", () =>{
    document.querySelectorAll(".square").forEach(square => {
        square.style.background = "rgba(255,255,255,0.01)";
    })
})
