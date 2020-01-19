const express = require('express')
const app = express()
const port = 3001
var r;

let message = {
    "mylist": [
        {
            "title": "Futurama",
            "id": 1,
            "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        },
        {
            "title": "The Interview",
            "id": 2,
            "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        },
        {
            "title": "Gilmore Girls",
            "id": 3,
            "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
        }
    ],
    "recommendations": [
        {
            "title": "Family Guy",
            "id": 4,
            "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
        },
        {
            "title": "The Croods",
            "id": 5,
            "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
        },
        {
            "title": "Friends",
            "id": 6,
            "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
        }
    ]
}
var tv = [];

for (let i = 0; i < message.mylist.length; i++) {
    tv.push(function(){i});
    return tv;
}

app.use('/', (req, res) => {
  r = res.json({message});
    return r;
 })
console.log(r);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))