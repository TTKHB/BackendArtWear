"use strict";

var express = require("express");

var router = express.Router();

var mongoose = require("mongoose");

var DashBoard = require("../model/DashBoard"); //lấy tất cả thông báo


router.get("/", function _callee(req, res) {
  var DashBoardList;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(DashBoard.find());

        case 2:
          DashBoardList = _context.sent;

          if (!DashBoardList) {
            res.status(500).json({
              success: false
            });
          }

          res.status(200).send(DashBoardList);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); //Thêm một dashboard moi by id the loai

router.post("/:id", function _callee2(req, res) {
  var dashboard;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dashboard = new DashBoard({
            title: req.body.title,
            Styles: req.body.Styles,
            theloai_id: req.params.id
          });
          _context2.next = 3;
          return regeneratorRuntime.awrap(dashboard.save());

        case 3:
          dashboard = _context2.sent;

          if (dashboard) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("The dashboard cannot be created!"));

        case 6:
          res.send(dashboard);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;