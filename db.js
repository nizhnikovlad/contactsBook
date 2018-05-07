const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:1@localhost:5432/addressbook')

const Departments=db.define('departments', {
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
  },
  parent_id:{
    type: Sequelize.BIGINT,
      references: {
        model: 'departments',
        referencesKey: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
  },
  name:{
    type:Sequelize.STRING,
    unique: true,
    allowNull: true
  }
},
{timestamps: false})

const Contacts = db.define('contacts',{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  department_id:{
    type: Sequelize.BIGINT,
      references: {
        model: 'departments',
        referencesKey: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
  }
},
{timestamps: false})

const Contact_to_List = db.define('contacts_to_list', {
  list_id:{
    type: Sequelize.BIGINT,
    references: {
      model: 'lists',
      referencesKey: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  contact_id:{
    type: Sequelize.BIGINT,
    references: {
      model: 'contacts',
      referencesKey: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }
}
},{timestamps: false})

const Lists = db.define("lists",{
  id:{
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
},{timestamps:false})

  db.sync();

module.exports = {
  db,
  Contacts,
  Departments
}
