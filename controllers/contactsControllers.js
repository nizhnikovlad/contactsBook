const Contacts = require('../models/contactsModels');

 function allContacts(req, res) {
  Contacts.allContacts().then(data=>res.send(data));
}
function allContacts_test(req, res){

}
module.exports ={
  allContacts
}
