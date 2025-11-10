const express = require("express");
const {getAllUsers, getUserById, addUser, deleteUser} = require("../queries/users");

const router = express.Router();

router.get("/", async(req,res) => res.json(await getAllUsers()));
router.get("/:id", async(req,res) => res.json(await getUserById(req.params.id)));
router.post("/", async(req,res) => res.status(201).json(await addUser(req.body)));
router.delete("/:id", async(req,res) => res.status(200).json(await deleteUser(req.params.id)));

module.exports = router;