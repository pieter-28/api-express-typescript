'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [
            {
                id: 1,
                name: 'John Doe',
                username: 'johndoe',
                password: '123456',
                email: 'johndoe@gmail.com',
                token: '123456',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Rian Doe',
                username: 'riandoe',
                password: '123456',
                email: 'riandoe@gmail.com',
                token: '123456',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: 'Wiro Doe',
                username: 'wirodoe',
                password: '123456',
                email: 'wirodoe@gmail.com',
                token: '123456',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
