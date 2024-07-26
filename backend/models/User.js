import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    no:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    descOfPayment:{
        type:String,
        required:true
    },
    bankAcc:{
        type:String,
        required:true
    },
    invoiceNo:{
        type:Number,
        required:true
    },
    preparedBy:{
        type:String,
        required:true
    },
    accounting:{
        type:String,
        required:true
    },
    approvedBy:{
        type:String,
        required:true
    },
    
},{timestamps:true})


const usermodel= mongoose.model('voucher',userSchema)

export default usermodel