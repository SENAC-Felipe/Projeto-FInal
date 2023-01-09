import { mongoose } from "mongoose";
mongoose.set('strictQuery', true);

const urlDatabase = 'mongodb+srv://FELIPE:Femacedo01@cluster0.ppkgnth.mongodb.net/test';

export const startDB = () => {
    mongoose.connect(urlDatabase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectado ao banco de dados!"));
};


