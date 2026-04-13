module.exports = (sequelize, DataTypes) => {
  const AuditConfig = sequelize.define(
    'AuditConfig',
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
      fieldName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      tableName: 'audit_config',
      timestamps: true
    }
  );
  return AuditConfig;
};