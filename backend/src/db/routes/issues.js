const express = require("express");
const {getAllIssues, getIssueById, addIssue, updateIssue, deleteIssue} = require("../queries/issues");

const router = express.Router();

router.get("/", async(req, res) => res.json(await getAllIssues()));
router.get("/:id", async(req, res) => res.json(await getIssueById(req.params.id)));
router.post("/", async(req,res) => res.status(201).json(await addIssue(req.body)));
router.patch("/:id", async(req, res) => res.json(await updateIssue(req.params.id, req.body.status)));
router.delete("/:id", async(req, res) => res.status(200).json(await deleteIssue(req.params.id)));

module.exports = router;