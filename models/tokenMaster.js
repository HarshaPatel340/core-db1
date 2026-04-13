module.exports = (sequelize, DataTypes) => {
  const TokenMaster = sequelize.define(
    'TokenMaster',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      incentivecode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bundlenumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      serialnumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      physicalstatus: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdby: {
        type: DataTypes.UUID,
        allowNull: true
      },
      modifiedby: {
        type: DataTypes.UUID,
        allowNull: true
      }
    },
    {
      tableName: 'token_master',
      timestamps: true
    }
  );
  return TokenMaster;
};