const { Sequelize } = require("sequelize");
const sequelize = require("../database/Conexao");

const Foto = sequelize.define('foto', {
    modelo: Sequelize.TEXT,
    ano: Sequelize.NUMBER,
    data_inclusao: Sequelize.DATE
}, {
    timestamps: false,
    tableName: 'foto'
});

module.exports = Foto;