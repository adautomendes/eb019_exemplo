const { Sequelize } = require("sequelize");
const sequelize = require("../database/Conexao");

const Salgado = sequelize.define('salgado', {
    nome: Sequelize.TEXT,
    preco: Sequelize.DOUBLE,
    data_inclusao: Sequelize.DATE
}, {
    timestamps: false,
    tableName: 'salgado'
});

module.exports = Salgado;