'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Posts', [
            {
                id: 1,
                title: 'Post 1',
                description: "Post 1 description",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                title: 'Post 2',
                description: "Post 2 description",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                title: 'Post 3',
                description: "Post 3 description",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Posts', null, {});
    }
};
