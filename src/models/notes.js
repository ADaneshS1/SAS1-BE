import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true,
    },
    note: {
        type:String,
        require:true,
    },
    user_id: {
        type:String,
        require:true,
    },
    date: {
        type:String,
        default:'',
    },
})

let taskModel;
if(mongoose.models.Notes) {
    taskModel = mongoose.model('Notes')
} else {
    taskModel = mongoose.model('Notes', taskSchema)
}

export default taskModel