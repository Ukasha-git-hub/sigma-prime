let todo=[];
let req = prompt("please enter your task");
while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    else if (req == "list"){
      console.log(`your panding task ${todo}`);
        for(let i =0; i<todo.length; i++){
            console.log(`${i} ${todo[i]}` );
        }
    }else if(req == "add"){
        let add = prompt("please add your task");
        todo.push(add);
        console.log("task added");
    }else if(req == "delete"){
         let del =prompt("enter the task that you wnat to remove");
         todo.splice(del, 1);

    }else {
        console.log("wrong task");
    }
    req= prompt("please enter your task");
}