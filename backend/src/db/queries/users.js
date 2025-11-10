const pool = require('../pool');

// get all Users
const getAllUsers = async () => {
    const {rows} = await pool.query("SELECT * FROM users;");
    return rows;
}

// get User by Id
const getUserById = async (id) => {
    const {rows} = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
    return rows;
}

// register user
const addUser = async ({name, email, password_hash, role}) => {
    await pool.query(
        "INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4)", [name, email, password_hash, role]);
}

// delete user  
const deleteUser = async(id) => {
    await pool.query("DELETE FROM users WHERE id =$1;",[id]);
}

module.exports = {getAllUsers, getUserById, addUser, deleteUser};