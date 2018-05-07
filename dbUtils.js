const {Departments, Contacts} = require('./db');

function setUpConnection(){
}
function ModelViewContacts(){
  return Contacts.findAll();
}
function ModelCreateContacts(data){
  Departments.create({
    id: data.department_id,
    parent_id: data.department_id,
    name: data.departmentName,
  })
  Contacts.create({
    department_id: data.department_id,
    name: data.name,
    phone: data.phone,
    email: data.email,
  })
}
function ModelUpdateContacts(data){
  Contacts.update(
    {
      department_id: data.department_id,
      name: data.name,
      phone: data.phone,
      email: data.email,
    }, {where:{id: data.id}})
}
function ModelDeleteContacts(id){
  Contacts.destroy({where: {id: id}})
}
module.exports = {
  setUpConnection,
  ModelViewContacts,
  ModelCreateContacts,
  ModelUpdateContacts,
  ModelDeleteContacts,
}
