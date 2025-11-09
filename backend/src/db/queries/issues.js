const pool = require("../pool.js");

// get all issues
const getAllIssues = async () => {
    const {rows} = await pool.query("SELECT * FROM issues;");
    return rows;
};

// get issue by id
const getIssueById = async (id) => {
    const {rows} = await pool.query("SELECT * FROM issues WHERE id =$1;", [id]);
    return rows;
};

// create issue
const addIssue = async ({title, description, lat, lng, created_by}) => {
    await pool.query(
        "INSERT INTO issues (title, description, lat, lng, created_by) VALUES ($1, $2, $3, $4, $5)", [title, description, lat, lng, created_by]);
};

// update issue
const updateIssue = async(id, status) => {
    await pool.query(
        "UPDATE issues SET status = $2, updated_at = NOW() WHERE id =$1;", [id,status]
    );
}

// delete issue
const deleteIssue = async(id) => {
    await pool.query("DELETE FROM issues WHERE id = $1;", [id]);
}

module.exports = {
    getAllIssues, getIssueById, addIssue, updateIssue, deleteIssue
}