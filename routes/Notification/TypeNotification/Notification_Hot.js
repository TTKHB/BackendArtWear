const NotificationHot = require("../../../model/Nofitication/TypeNotification/Notification_hot");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/**
 * Lấy tất cả Notification Event
 */
router.get("/", async (req, res) => {
  const notifyList = await NotificationHot.find().populate([
    "user_id",
    "NotifyType_id",
  ]);

  if (!notifyList) {
    res.status(500).json({
      success: false,
    });
  }
  res.status(200).send(notifyList);
});

/**
 *Them thong bao hot
 */
router.post("/", async (req, res) => {
  let Notify = new NotificationHot({
    title: req.body.title,
    wholiked: req.body.wholiked,
    PeopleLiked: req.body.PeopleLiked,
    title: req.body.title,
    content: req.body.content,
    banner: req.body.banner,
    user_id: req.body.user_id,
    NotifyType_id: req.body.NotifyType_id,
    hot_id: req.body.hot_id,
  });
  Notify = await Notify.save();

  if (!Notify)
    return res.status(400).send("the Notification cannot be created!");
  res.send(Notify);
});

module.exports = router;
