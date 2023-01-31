const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  // Add your Sequelize fields here
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    empty: false,
    primaryKey: true,
  },
  userType: {
    type: Sequelize.ENUM,
    values: ['STUDENT', 'TEACHER'],
    defaultValue: 'STUDENT',
    allowNull: false,
  },

});
User.findTeachersAndMentees(async (User)=>{
  let arr=[];
  

 try{
  let user=await User.findAll();

 }catch(e) {
  
consoel.log(e)
 }
});

/**
 * We've created the association for you!
 *
 * A user can be related to another user as a mentor:
 *       SALLY (mentor)
 *         |
 *       /   \
 *     MOE   WANDA
 * (mentee)  (mentee)
 *
 * You can find the mentor of a user by the mentorId field
 * In Sequelize, you can also use the magic method getMentor()
 * You can find a user's mentees with the magic method getMentees()
 */

// class User extends Model {}

// User.init(
//   {
//     name: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//     },
//   },
//   { sequelize }
// );

User.belongsTo(User, { as: 'mentor' });
User.hasMany(User, { as: 'mentees', foreignKey: 'mentorId' });

module.exports = User;
