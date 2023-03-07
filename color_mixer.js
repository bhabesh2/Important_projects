

// const color1 = ["red","blue","yellow"];

// const color2 = ["red","yellow", "blue"];

let color_mixer = ((color1,color2,operator)=>{
    let result;
   switch(operator){
        case ("&&"):
            if(color1 == "red" && color2 == "blue" || color1 == "blue" && color2 == "red"){
                result = "purple";
            }
            else if(color1 == "red" && color2 == "yellow" || color1 == "yellow" && color2 == "red"){
                result = "orange";
            }
            else if(color1 == "blue" && color2 == "yellow" || color1 == "yellow" && color2 == "blue"){
                result = "green";
            }
            else{
                result = "invalid color combination";
            }
            break;
            default : console.log("invalid operator");
            break;
   }
   console.log(result);
})

color_mixer("red","blue","&&")//purple;
color_mixer("red","yellow","&&")//orange;
color_mixer("blue","yellow","&&")//green;

// below this to show how we can use arrays and implement that. 

// color_mixer(color1[0],color2[2],"&&");(purple);
// color_mixer(color1[0],color2[1],"&&");(orange);
// color_mixer(color1[1],color2[1],"&&");(green);

