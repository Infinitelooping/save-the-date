const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        planner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'planner',
                key: 'id'
            }
        },
        guest_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'guest',
                key: 'id'
            }
        },
        partner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Partner',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;