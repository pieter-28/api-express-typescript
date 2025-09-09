import {DataTypes, Model, Optional, Sequelize} from "sequelize";

interface IUser {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

interface IUserCreate extends Optional<IUser, "id" | "name" | "email" | "token" | "createdAt" | "updatedAt" | "deletedAt"> {
}

export class User extends Model<IUser, IUserCreate> implements IUser {
    public id!: number;
    public name!: string;
    public username!: string;
    public password!: string;
    public email!: string;
    public token!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public deletedAt!: Date;

    public static associate(models: any): void {

    }

    static initModel(sequelize: Sequelize): typeof User {
        User.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: DataTypes.STRING,
                username: DataTypes.STRING,
                password: DataTypes.STRING,
                email: DataTypes.STRING,
                token: DataTypes.STRING,
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
                deletedAt: DataTypes.DATE,
            },
            {
                sequelize,
                tableName: "Users",
                modelName: "User",
                paranoid: true, // enable soft delete
                deletedAt: "deletedAt", // name of the deletedAt column
            }
        );

        return User;
    }
}