import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";


class Regions extends Model {

}

Regions.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    code: {
        type: DataTypes.STRING(10)
    },
    country_id: {
        type: DataTypes.SMALLINT
    },
}, {
    sequelize,
    modelName: 'Region',
    tableName: 'region',
    timestamps: false
})



export default Regions
