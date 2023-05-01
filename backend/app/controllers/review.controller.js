const db = require("../models");
const Review = db.reviews;
const url = require("url")
// Create and Save a new Review
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  console.log(JSON.stringify(req.body))
  // Create a Review
  const review = new Review(req.body);

  // Save Review in the database
  review
      .save(review)
      .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Review."
      });
    });
};

// Retrieve all Reviews from the database.
exports.findAll = (req, res) => {
  let movieID = req.query.movieID
  var condition = movieID ? {movieID: movieID} : {};

  Review.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Reviews."
      });
    });
};

// Find a single Review with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

    console.log(JSON.stringify(req.query))
    let lastUpdate = req.query.lastUpdate;
    let lastUpdateDate = new Date(lastUpdate)
    console.log(lastUpdateDate)

  Review.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found Review with id " + id });
      }
      else if (lastUpdateDate.toString() !== data.updatedAt.toString() && lastUpdate !== "") {
          console.log(data.updatedAt.toString())
          console.log("Conflict!")
          return res.status(409).send({message: "Conflict."})
      }
      else {
          console.log(data.updatedAt.toString())
          res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Review with id=" + id });
    });
};

// Update a Review by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Review.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Review with id=${id}. Maybe Review was not found!`
          });
        } else {
          res.status(200).send({message: "Review was updated successfully."});
        }

      })
      .catch(err => {
      res.status(500).send({
        message: "Error updating Review with id=" + id
      });
    });
};

// Delete a Review with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Review.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Review with id=${id}. Maybe Review was not found!`
        });
      } else {
        res.send({
          message: "Review was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Review with id=" + id
      });
    });
};

// Delete all Reviews from the database.
exports.deleteAll = (req, res) => {
  Review.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Reviews were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Reviews."
      });
    });
};
