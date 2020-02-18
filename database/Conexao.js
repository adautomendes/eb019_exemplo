//Módulo responsável por conectar ao MySQL
const { Sequelize } = require("sequelize");

/**
 * eb019_exemplo => nome do BD
 * root => usuário do BD
 * '' => senha do BD
 * host: 'localhost' => onde o BD está rodando, mantenha 'localhost' se estiver rodando na sua máquina
 * dialect: 'mysql' => dialeto com o qual você quer se comunicar com o BD, mantenha 'mysql' se estiver usando MySQL
 */
const sequelize = new Sequelize('eb019_exemplo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

/**
 * Função que faz a autenticação no BD
*/
sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao BD.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao BD:', err);
    });

/**
 * Exportando módulo para ser usado externamente.
 * Aqui exportamos a conexão com o BD.
 */
module.exports = sequelize;