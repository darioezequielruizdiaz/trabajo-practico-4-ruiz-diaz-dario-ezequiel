import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
const Character = sequelize.define(
    "characters", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ki: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
)

export default Character;