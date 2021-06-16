const express = require('express');
const app = express();
const port = 8080;
const d = new Date( Date.now());
function condition(req,res,next) {
    const day =d.getDay()
    const hour =d.getHours();
  if((day >=2 && day<=6 )  && (hour >=9 && hour<=17 )  === false ) {
    console.log ("close");
    res.send('The web application is not available')
  }  
  else {
next();
}
}  
app.use(condition);  
app.use(express.static('projet'))
app.listen(8080, (err)=>{
    err ? console.log(err) : console.log('The server is running on port 8080')
})
