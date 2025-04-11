// src/modules/user/service.js
const User = require("./model");

exports.createUser = (userData) => {
    // Implement additional business logic if necessary
    return User.create(userData);
};

exports.getUsers = (query) => {
    // Add pagination
    const { page = 1, limit = 10 } = query;
    const offset = (page - 1) * limit;
    // Filter by gender
    const filter = {};
    const { gender } = query;
    if (gender) filter.gender = gender;
    // Other business logic if required
    return User.findAll({
        where: filter,
        limit,
        offset,
        order: [["name", "ASC"]],
    });
};
// < define other services like update, delete, etc >