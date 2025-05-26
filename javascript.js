
function humanChoice () {
      let number = parseInt(prompt("How many squares width/height"));
      return number;
    }

function createSquares () {
     const container = document.querySelector("#container");
    const btn = document.querySelector("button"); 
   
    btn.addEventListener("click", () => {
        const squares = container.querySelectorAll(".square")
        squares.forEach(square => square.remove());
       let choice = humanChoice();
          if (choice <= 100 ) {
            
        let input = choice;
             for (let i = 0; i < choice * choice; i++) {
                const square = document.createElement("div");
            square.classList.add("square");
            let size = (500 / input);
            square.style.cssText = `
            width: ${size}px;
            `
            colorChanger(square);
            container.appendChild(square); 
             }  
            } else {
                alert("Has to be less than 100");
             }
             
}); 
}


function colorChanger (square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
    });
}

createSquares();