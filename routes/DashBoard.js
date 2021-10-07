const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const DashBoard = require("../model/DashBoard");

//lấy tất cả thông báo
router.get("/", async (req, res) => {
  const DashBoardList = await DashBoard.find();

  if (!DashBoardList) {
    res.status(500).json({
      success: false,
    });
  }
  res.status(200).send(DashBoardList);
});

//Thêm một dashboard moi by id the loai
router.post("/:id", async (req, res) => {
  let dashboard = new DashBoard({
    title: req.body.title,
    Styles: req.body.Styles,
    theloai_id: req.params.id,
  });
  dashboard = await dashboard.save();

  if (!dashboard)
    return res.status(400).send("The dashboard cannot be created!");

  res.send(dashboard);
});

module.exports = router;
