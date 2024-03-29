import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import {Configuration, OpenAIApi} from 'openai'

const app = express()

env.config()

app.use(cors({
    origin: '*',
}))
app.use(bodyParser.json())


// Configure open api
const configuration = new Configuration({
    apiKey: process.env.API_KEY // VISIT .env AND MAKE CHANGES
})
const openai = new OpenAIApi(configuration)


// listening
app.listen("3080", ()=>console.log("listening on port 3080"))



// dummy route to test
app.get("/", (req, res) => {
    res.send("Hello World!")
})


//post route for making requests
app.post('/', async (req, res)=>{
    const {message} = req.body
    const {hapi} = req.body


    let curMsg = [{role: "system", content: "A curious therapist that asks questions"}]
    var arrayLength = hapi.length
    for (var i = 0; i < arrayLength; i++) {

        if(hapi[i].sender == "user"){
            curMsg=curMsg.concat({role: "user", content: hapi[i].message})
        }else if(hapi[i].sender == "ai"){
            curMsg=curMsg.concat({role: "assistant", content: hapi[i].message})
        }
    }
    
    try{
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: curMsg,
          });
        res.json({message: response.data.choices[0].message.content})


    }catch(e){
        console.log(e)
        res.send(e).status(400)
    }
})

