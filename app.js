let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerdisplay = document.querySelector(".msg");
const winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]
]
const resetGame = () => {
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "";
        });
    winnerdisplay.style.display = "none";
    winnerdisplay.innerText = "";
}
resetBtn.addEventListener("click", resetGame);
const checkwinner = () => {
    for (let pattern of winpattern) {
        let postiVal1 = boxes[pattern[0]].innerText;
        let postiVal2 = boxes[pattern[1]].innerText;
        let postiVal3 = boxes[pattern[2]].innerText;

        if (postiVal1 != "" && postiVal2 != "" && postiVal3 != "") {
            if (postiVal1 === postiVal2 && postiVal2 === postiVal3) {
                return postiVal1;
            }
        }

    }
    return null;
};
const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("test click")
        box.style.backgroundColor = "#a96da3";
        if (count % 2 == 0) {
            box.innerText = "X";
        }
        else {
            box.innerText = "O";
        }
        box.disabled = true;
        count++;
        let wincheck= checkwinner();
        if (wincheck) {
            disableBoxes();
            winnerdisplay.style.display = "block";
            winnerdisplay.innerText = ` Winner : ${wincheck}`;
        }
    });

})
