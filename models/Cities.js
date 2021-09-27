import { Model, DataTypes } from "sequelize";
import sequelize from "../services/sequelize";


class Cities extends Model {

}

Cities.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
       
    },
    name: {
        type: DataTypes.STRING,
    },
    country_id: {
        type: DataTypes.SMALLINT
    },
    region_id: {
        type: DataTypes.MEDIUMINT
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 5)
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8)
    }
}, {
    sequelize,
    modelName: 'City',
    tableName: 'city',
    timestamps: false
})



export default Cities
