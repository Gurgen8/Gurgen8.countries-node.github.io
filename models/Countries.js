import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";


class Countries extends Model {

}

Countries.init({
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        uniqueKey: true,
    },
    code: {
        type: DataTypes.STRING(10)
    },
}, {
    sequelize,
    modelName: 'Countrie',
    tableName: 'countrie',
    timestamps: false
})



export default Countries
