//create server using nodejs express

//install express in console (npm i express)
import express from 'express';
//import morgan
import morgan from 'morgan';
// import http from 'http';




//create server (dont express)

// const server =http.createServer((res,req)=>{
//     res.status = 200;
//     res.setHeader('Content-Type','text/plain')
//     res.send('Hello World')
// })
// server.listen(3000, ()=> console.log('Server on port 3000'))
// CREATE SERVER WITH EXPRESS
// -------------------------------------
const app = express();
//Settings

app.set('appName','Fazt Express Tutorial');
app.set('port',3000);
// app.set('view engine','ejs')
// -----------------------------------------
//MORGAN 
app.use(morgan('dev'));
// --------------------------------------------
// READ FORMAT JSON

app.use(express.json()); //this is a meddiware for understanding to json files

//this works only for a specific path
// app.all('/user',(req,res,next)=>{
//     console.log("Por aca paso");
//     next(); 

// });


//routes 


// Method get 
app.get('/', (req, res)=>{
    // res.render('index.ejs')
})
//this is a function or express 
 //do something before with this function
//send user method get
app.get('/user', (req, res)=>{
    res.json({
        name : 'Pedro',
        lastname : 'Howe'
    })
})
//method post 
app.post('/user/:id',(req,res)=>{
    //view methods post
    console.log(req.body); //take to info 
    console.log(req.params); // more info about the request
    res.send("post request received")
})
//method put

app.put('/user/:id',(req,res)=>{
    console.log(req.body); //take to info
    res.send(`User ${req.params.id} updated successfully`);
})

//method delete
app.delete('/user/:id',(req,res)=>{
    res.send(`User : ${req.params.id} is deleted`)
})
//FOR MORE INFORMATION SEARCH IN THE DOCUMENTATION THE EXPRESS
//miderware
app.listen(app.get('port'), ()=> {
    console.log(app.get('appName'));

    console.log('Server on port ' + app.get('port'));
});

