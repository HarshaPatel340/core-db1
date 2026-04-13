const { Sequelize } = require('sequelize');

if (!process.env.DATABASE_URL) {
  throw new Error('[db-models] DATABASE_URL environment variable is not set.');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions:
    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
      ? { ssl: { require: true, rejectUnauthorized: false } }
      : {}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User        = require('./user')(sequelize, Sequelize.DataTypes);
db.AuditConfig = require('./auditConfig')(sequelize, Sequelize.DataTypes);
db.AuditTrail  = require('./auditTrail')(sequelize, Sequelize.DataTypes);
db.TokenMaster = require('./tokenMaster')(sequelize, Sequelize.DataTypes);

module.exports = db;