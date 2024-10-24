import express from "express";
import { editProfile, followOrUnfollow, getAllUsers, getProfile, getSuggestedUsers, isFollowing, login, logout, register } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login); 
router.route('/logout').get(logout);
router.route('/:id/profile').get(isAuthenticated, getProfile);
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile);
router.route('/suggested').get(isAuthenticated, getSuggestedUsers);
router.route('/all-users').get(isAuthenticated, getAllUsers);
router.route('/followorunfollow/:id').get(isAuthenticated, followOrUnfollow);
router.route('/isFollowing/:userId').get(isAuthenticated, isFollowing);

export default router;
