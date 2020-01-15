const express = require('express')
const app = express()
const port = 3001
/*
let request = new XMLHttpRequest();

request.open('GET','/message.json');
request.responseType = 'text';
request.onload=()=>{
    messageDisplay.textContent = request.response;
};
request.send();
const data = [
    [1, "<p>hello</p><img src='blah.jpg'/>"],
    [2, "blah, blah"]
  ];
  const messageChoose = document.querySelector('select');
  const messageDisplay = document.querySelector('pre');
  messageChoose.onChange = (){
    const message = messageChoose.value;
    updateDisplay(message);
  }
  function updateDisplay(message){
  
  };
  const transformedData = data.map(a => {
    const div = document.createElement('div'); // whatever #info is
    div.innerHTML = a[1];
  
    const images = div.querySelectorAll("img");
    for (var i = 0; i < images.length; ++i) {
     
      var tempSrc = images[i].src;
      var imgName = tempSrc.split("/").pop();
  
      images[i].src = "../../resources/media/assets/650x450.png";
  
      images[i].setAttribute('data-src', tempSrc);
      images[i].setAttribute('data-mobile-src', "/stories/media/images/small-images/" + imgName);
    }
  
    return [a[0], div.innerHTML];
  });
  
  document.getElementById("info").innerHTML = transformedData;
  console.log(transformedData);
  */
app.use('/json', (req, res) => {
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
    return res.json({"message": message})
 })




app.listen(port, () => console.log(`Example app listening on port ${port}!`))