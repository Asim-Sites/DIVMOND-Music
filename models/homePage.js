const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const express = require('express');
const router = express.Router();
const HomeSchema = new Schema ({
    bio : { type: String },
    igLink : { type: String },
    twitterLink : { type: String },
    fbLink: { type: String },
    currentShow: {type: String}
})
HomeSchema.pre("save", function(next) {
    const now = new Date();
    this.updatedAt = now;
  
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });

module.exports = router;