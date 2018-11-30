const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// Routes for the application
// Get all data for the page
router.get("/", (req, res) => {
  // Create object for handlebars to render
  burger.getAll(data => {
    var hbsObject = {
      burger: data
    };

    res.render("index", hbsObject);
  });
});

// Create a new burger
router.post('/api/burgers', (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [`'${req.body.burger_name}'`, `${req.body.devoured}`],
    data => {
      if (data.affectedRows == 0) {
        return res.status(404).end();
      } else {
        return res.status(201).end();
      }
    }
  );
});

// Update if a burger is devoured or not
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`
    burger.update(req.body.devoured, condition, data => {
        if (data.affectedRows == 0){
        return res.status(404).end();
        } else {
            return res.status(202).end();
        }
    });
});

module.exports = router;