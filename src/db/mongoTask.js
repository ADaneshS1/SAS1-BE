import mongoose from "mongoose";

export const connectionDB = async () => {
    try {
      await mongoose.connect(
        'mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/mynotes'
        , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }) 
    } catch (error) {
        console.log(error);
    }
  
  };