import {DataTypes, Model, Optional, Sequelize} from "sequelize";

interface IPost {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

interface IPostCreate extends Optional<IPost, "id"> {
}

export class Post extends Model<IPost, IPostCreate> implements IPost {
    public id!: number;
    public title!: string;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public deletedAt!: Date;

    public static associate(models: any): void {

    }

    static initModel(sequelize: Sequelize): typeof Post {
        Post.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
                deletedAt: DataTypes.DATE,
            },
            {
                sequelize,
                tableName: "Posts",
                modelName: "Post"
            }
        );
        return Post;
    }
}