'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('token_master', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      incentivecode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bundlenumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      serialnumber: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      physicalstatus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdby: {
        type: Sequelize.UUID,
        allowNull: true
      },
      modifiedby: {
        type: Sequelize.UUID,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('token_master');
  }
};