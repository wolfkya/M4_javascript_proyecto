const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Database',
    'username',
    'password',
{
    host: '',
    dialect: 'v4.0.0',
    native: true,
    ssl: true
}
);

module.exports = sequelize;