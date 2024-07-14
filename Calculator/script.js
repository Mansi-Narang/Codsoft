let string="";
let buttons= document.getElementsByClassName("btn");

let input= document.querySelector("input");

for (button of buttons){
    button.addEventListener("click",(e)=>{
        let value= e.target.id;
        if(value=="="){
            string=eval(string);
            console.log(string);
            if(string==undefined){
            alert("Please provide a valid expression");
            string="";
            }
            input.value=string;
            string="";
        }
        else if(value=="C"){
            string="";
            input.value=string;
        }
        else if (isOperator(value)){
            if (isOperator(string[string.length-1])){
                string=string.slice(0,length-1)+value;
            }else{
                string+=value;
            }
            input.value=string;
        }
        else if(value=="erase"){
            string= string.slice(0,-1);
            input.value=string;
        }
        else{
        string+=value;
        console.log(string);
        input.value=string;
    }
})}

function isOperator(char){
    return char == "+" || char == "-" || char == "*" || char == "/" || char == "%";
}

