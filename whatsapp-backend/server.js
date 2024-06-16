/// Server running on IP address 'http://localhost:9000' ///

import express  from 'express'
import mongoose from "mongoose";
import Messages from './dbMessages.js'
import Cors from "cors";
import Pusher from 'pusher';


// app config
const app = express()
const port = 9000
const pusher = new Pusher({
   appId: "1442162",
   key: "dcc7c15e6c7a5b67f219",
   secret: "07789b2b73c797ae6921",
   cluster: "eu",
   useTLS: true
 });
 

/// middlewares
app.use(express.json())                /// to get complete JSON back from server ///
app.use(Cors())

/// DB config
const connection_url = 'mongodb+srv://dbUsama:dbUsama123@cluster0.wtcvuy3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connection_url)



/// Pusher
const db = mongoose.connection;
db.once('open', ()=>{
   console.log('DB connected')
   const msgCollection = db.collection('messagecontents')
   const changeStream = msgCollection.watch()    

     /// "changeStream" is watching that collection

     changeStream.on('change', (change) => {    /// Whenever change happens in collection, it will trigger pusher 
         console.log(change)      /// "change" will be a document that is inserted

         if(change.operationType == 'insert'){

            const msgDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
               name: msgDetails.name,
               message: msgDetails.message,
               timeestamp: msgDetails.timeestamp,
               received: msgDetails.received
            })

         }else{
            console.log("Error while triggering pusher")
         }
     })
   })




/// API endpoints

/// GET requests are meant to get data from specified resources (server, in this case)
/// POST requests are meant to submit data to a specified resource. (server, in this case)

app.get('/', (req, res)=>{
   res.send('Hello world')
})


app.post('/messages/new', (req, res) => {
      const dbMessage = req.body                      ///  access data in a string
   
      Messages.create(dbMessage, (err, data) => {        /// create message (document)

      if(err){
         res.status(500).send(err)             /// 500 -> internal server error
      } else{
         res.status(201).send(data)           /// 201 -> created successfully row
      }

   })             
})



app.get('/messages/sync', (req, res) => {         /// retrieving messages from database that we just push

   Messages.find((err, data) => {                   /// find message (document)

      if(err){
         res.status(500).send(err)             /// 500 -> internal server error
      } else{
         res.status(200).send(data)          
      }

   })           
})


/// listen
app.listen(port ,()=>{
   console.log(`listening on http://localhost:${port}`)
})