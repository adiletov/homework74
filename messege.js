const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = "./messages";

    const arr = [];
    fs.readdir(path, ((err, files) => {
        const arrayMessages = files.slice(-5);
        arrayMessages.forEach(file=> fs.readFile(`./messages/${file}`, (err, data)=>{
            if (err){
                console.log(err)
            }else{
                arr.push(JSON.parse(data))
            }
        }));
    }));


router.get('/', (req,res)=> {
   res.send(arr)
});



const date = new Date().toISOString();

    router.post('/', (req,res)=>{
    const message = {
        message: req.body.text,
        date: date
    };
    fs.writeFile(`./messages/${date}.json`, JSON.stringify(message), err => {
        if (err){
            console.log(err)
        }else{
            console.log('File was saved')
        }
    });
    res.send('Request post')
});

module.exports = router;