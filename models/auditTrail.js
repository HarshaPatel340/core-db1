module.exports = (sequelize, DataTypes) => {
  const AuditTrail = sequelize.define(
    'AuditTrail',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      tableName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      recordId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      fieldName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      oldValue: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      newValue: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      changedBy: {
        type: DataTypes.UUID,
        allowNull: true
      }
    },
    {
      tableName: 'audit_trail',
      timestamps: true
    }
  );
  return AuditTrail;
};