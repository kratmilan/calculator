let calc = {
    a: "x",
    oper: "0" ,
    b : "x"
};
const display = document.querySelector(".display")

function clear() {
    const content = display.querySelector(".content")
    display.removeChild(content)

}

function show(data) {
    clear()
    const contents = document.createElement("div")
    contents.className = "content"
    contents.textContent = data
    display.appendChild(contents) 
}

function operate(calcul,data) {
    let current = 0
    let isnumber = false
    if (data >=0 && data<=9) {
        isnumber = true
    }
    if (calcul.a == "x"  && isnumber) {
        calcul.a = data
        current = calcul.a
    }
    else if (calcul.a !="x" && calcul.oper == "0" && isnumber) {
        calcul.a = calcul.a * 10 + data
        current = calcul.a
    }
    else if ((isnumber == false) && data != "=" && data != "cl") {
        calcul.oper = data
        current = data
    }
    else if ( isnumber && calcul.oper != "0" && calcul.a != "x") {
        if (calcul.b != "x") {
            calcul.b = calcul.b * 10 + data
        }
        else calcul.b = data
        current = calcul.b
    }
    else if (data == "=") {
        if (calcul.oper == "+") current = calcul.a + calcul.b
        else if (calcul.oper == "-") current = calcul.a - calcul.b
        else if (calcul.oper == "*") current = calcul.a * calcul.b
        else if (calcul.oper == "/") current = calcul.a / calcul.b
    }
    else if (data == "cl") {
        calcul.a = "x"
        calcul.oper = "0"
        calcul.b = "x"
        current = 0
    }

    show(current)
}


const button1 = document.querySelector("#on")
button1.onclick = () => operate(calc,1)

const button2 = document.querySelector("#tw")
button2.onclick = () => operate(calc,2)

const button3 = document.querySelector("#th")
button3.onclick = () => operate(calc,3)

const button4 = document.querySelector("#fo")
button4.onclick = () => operate(calc,4)

const button5 = document.querySelector("#fi")
button5.onclick = () => operate(calc,5)

const button6 = document.querySelector("#si")
button6.onclick = () => operate(calc,6)

const button7 = document.querySelector("#se")
button7.onclick = () => operate(calc,7)

const button8 = document.querySelector("#ei")
button8.onclick = () => operate(calc,8)

const button9 = document.querySelector("#ni")
button9.onclick = () => operate(calc,9)

const button0 = document.querySelector("#ze")
button0.onclick = () => operate(calc,0)

const buttonpl = document.querySelector("#pl")
buttonpl.onclick = () => operate(calc,"+")

const buttonmi = document.querySelector("#mi")
buttonmi.onclick = () => operate(calc,"-")

const buttonti = document.querySelector("#ti")
buttonti.onclick = () => operate(calc,"*")

const buttondi = document.querySelector("#di")
buttondi.onclick = () => operate(calc,"/")

const buttoneq = document.querySelector("#eq")
buttoneq.onclick = () => operate(calc,"=")

const buttoncl = document.querySelector("#cl")
buttoncl.onclick = () => operate(calc,"cl")
