#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = () => Math.floor(Math.random() * 10 +1);

const answer = await inquirer.prompt([{
    name:"useRandomNumber",
    type:'number',
    message:"Enter Any Random Number"
    
}]);

if(answer.useRandomNumber === randomNumber){
    console.log("Congrulation You Enter Currect Number");
}else{
    console.log("Sorry This is  not currect number")
}