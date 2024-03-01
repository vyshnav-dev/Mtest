import mongoose from 'mongoose';
const { Schema } = mongoose;

const formSchema = new Schema({
  
    Name:{
        type:String,
        required:false
    },
    Age:{
        type:String,
        required:false
    },
    Email:{
        type:String,
        required:false,
       
    },
    Phone:{
        type:String,
        required:false,
       
    },
    Cource:{
        type:String,
        required:false,  
    },
    
    Education:{
        type:String,
        required:false,  
    },
    
    
  
  
});

const Form = mongoose.model('Form', formSchema);

export default Form;