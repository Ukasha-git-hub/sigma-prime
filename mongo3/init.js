const mongoose= require("mongoose");
const chat = require("./model/chat.js");

main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
 let chats = [
    {
        from:"ali",
        to:"sarim",
        msg:" i got to go will you join me ?",
        time: new Date(),
    },
        {
        from:"kaiser",
        to:"amir",
        msg:"will you do a live stream today?",
        time: new Date(),
    },
        {
        from:"abdullah",
        to:"abdul rafay",
        msg:"have a great time with your family",
        time: new Date(),
    },
        {
        from:"kashif",
        to:"sarah",
        msg:"we are going to leave karachi at exact 10 pm",
        time: new Date(),
    }
 ];
 chat.insertMany(chats);
console.log("data inserted");
