const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Voucher = require("../model/Voucher");
const generatedCode = require("../helper/randomCode");

//get all
router.get("/", async (req, res) => {
  const vouchers = await Voucher.find().populate("User_id");

  if (!vouchers) {
    res.status(500).json({
      success: false,
    });
  }
  res.status(200).send(vouchers);
});

//insert voucher
router.post("/:User_id", async (req, res) => {
  let voucher = new Voucher({
    User_id: req.params.User_id,
    code: generatedCode(7),
    gioihan: req.body.gioihan,
    sotiengiam: req.body.sotiengiam,
    sudung: req.body.sudung,
    dateStart: req.params.dateStart,
    dateEnd: req.params.dateEnd,
  });
  voucher = await voucher.save();

  if (!voucher) return res.status(400).send("the voucher cannot be created!");

  res.send(voucher);
});
module.exports = router;
