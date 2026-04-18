const mongoose= require("mongoose");

let chatschema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
        
        
    },
    time:{
        type:Date,
        required:true
    }

});
const chat = mongoose.model("chat",chatschema);
module.exports=chat;