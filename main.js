
let input = document.getElementById("int");
let buttons = document.querySelectorAll("button");

let str = ""
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (p) =>{
        if(p.target.innerHTML == "="){
            str = eval(str);
            input.value = str ;
        }else if(p.target.innerHTML == "AC"){
            str = ""
            input.value = str;

        }else if(p.target.innerHTML == "DEL"){
            str = str.substring(0, str.length-1);
            input.value = str;
        }else{
            str += p.target.innerHTML;
            input.value = str
        }
    })
})















