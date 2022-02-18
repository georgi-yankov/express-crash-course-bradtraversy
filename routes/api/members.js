import express from "express";
export const router = express.Router();

import {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} from "../../controllers/members.js";

// Gets all members
router.get("/", getAllMembers);

// Get Single Member
router.get("/:id", getMember);

// Create Member
router.post("/", createMember);

// Update Member
router.put("/:id", updateMember);

// Delete Member
router.delete("/:id", deleteMember);
