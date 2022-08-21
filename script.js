const container = document.querySelector(".container");
const display = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));


buttons.map(button => {
    button.addEventListener("click", e => {
        switch (e.target.innerText) {
            case "AC": 
                display.innerText = "";
                break;
            case "=":
                let mep = "%";
                if (display.innerText.match(mep)) {
                    display.innerText = eval(display.innerText.replace("%", "/100"));
                }
                
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = "Math Error"
                }
                break;
            case "%":
                display.innerText += "%"
                
                
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})