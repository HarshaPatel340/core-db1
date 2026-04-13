'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('audit_trail', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      tableName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recordId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      fieldName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      oldValue: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      newValue: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      changedBy: {
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
    await queryInterface.dropTable('audit_trail');
  }
};