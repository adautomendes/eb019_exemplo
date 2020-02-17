const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('eb019_2020_1_exemplo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao BD.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao BD:', err);
    });

module.exports = sequelize;