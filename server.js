const express = require('express');
const {Departments, Contacts} = require('./db');
const bodyParser =require('body-parser');
const app = express();
const contactsControllers = require('./controllers/contactsControllers');
const {ModelViewContacts, ModelCreateContacts, ModelUpdateContacts, ModelDeleteContacts} = require('./dbUtils');


app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/addressList', (req, res) => {
  ModelViewContacts().then(data=>res.send(data));
});
app.get('/contacts', contactsControllers.allContacts);

app.get('/api/addressListDelete', (req,res) =>{
  ModelDeleteContacts(req.body.id)
});

app.post('/api/addressList', (req,res)=>{
  const data = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    department_id: req.body.depID,
    departmentName: req.body.departmentName,
  }
  ModelCreateContacts(data);
})

app.put('/api/addressList', (req,res)=>{
  const data = {
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    department_id: req.body.depID,
  }
  ModelUpdateContacts(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
