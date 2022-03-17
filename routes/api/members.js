import express from "express";
export const router = express.Router();

import {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "../../controllers/members.js";

// Gets all members § Create Member
router.route("/").get(getAllMembers).post(createMember);

// Get Single Member & Update Member & Delete Member
router.route("/:id").get(getMember).put(updateMember).delete(deleteMember);
