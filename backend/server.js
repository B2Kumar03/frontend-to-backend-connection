import express from 'express'

const PORT=8080
const app=express()

const jokes=[
    {
        id:1,
        joke:"Why don’t scientists trust atoms? Because they make up everything!"
    },{
        id:2,
        joke:'What do you call a fake noodle? An impasta!'
    }
]
    
app.get('/api/jokes',(req,res)=>{
    res.json({data:jokes})
})





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

