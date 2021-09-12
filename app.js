const express = require('express');
const sequelize = require('./database'); // waa is xigashada saxan ama tasalsulka(Arabic).
const User = require('./models/user');

const app = express();

app.use(express.json());

//Starting the connection.
app.get('/',  async (req, res) => {
    try{        
        sequelize.sync().then(() => {
            console.log('db is Ready.');
             res.send('Database is ready.');
        });
        // await  sequelize.authenticate();
   }catch(error){
       console.error('unable to connect.',error);
   }
});

//user registration
//  //reg is for registraion
//inserting data into table
 app.post('/reg', async (req, res) => {   

   await  User.create(req.body);  
    res.send('User is inserted.');  
 });

 //get all users
 app.get('/users', async (req, res) =>{
    const users = await User.findAll(); 
    res.send(users);
 })

 //get by id
 app.get('/users/:id', async(req, res) => {
     const id = req.params.id;
     const user = await User.findOne({
         where: {
             id: id
         }
     });
     res.send(user);
 })
 
 //update the user 
 app.put('/users/:id', async(req, res) =>{
    const id = req.params.id;
    const user = await User.findOne({
        where: {
            id: id
        }
    });
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    res.send('user is updated.');
 });

 app.delete('/users/:id', async(req, res) => {
     const id = req.params.id;
     await User.destroy({
        where: {
            id: id
        }
    })
    res.send('User is deleted')
 });



//close the connection
//if you close the db you most restart the server, by typing(rs).
app.get('/close',(req, res) => {
    try{
        sequelize.close();
        console.log('The connection was closed.');
        res.send('Connection was Closed.');
    }catch(error){
        console.error('unable to close :-',error);
    }
});



// cereat port 4000.
const port =   process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`This server is running on port http://localhost:${port}`);
});