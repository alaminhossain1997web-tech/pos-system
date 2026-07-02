const mongoose = require ( "mongoose");
const db_url = process.env.DB_URL
 const dbConnect =  ()=>{
    mongoose.connect(db_url).then(()=>{
    console.log("Database Connected Sucessfully")
}).catch((error)=>{
  console.log("Database connection failed",error)
})
 }

 module.exports = dbConnect

 DB_URL = "mongodb+srv://POS-System:dQMrxTlOVzjxCmbW@cluster0.ymz6izv.mongodb.net/POS-management-system?appName=Cluster0"