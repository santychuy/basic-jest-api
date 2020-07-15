const express = require('express');

const {
  getUsers,
  deleteUser,
  postUser,
  updateUser,
} = require('../controller/index.controller');

const router = express.Router();

router.route('/').get(getUsers).post(postUser);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;
