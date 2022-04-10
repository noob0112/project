const Event = require("../models/Event");

const create = async (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    time: req.body.time,
  });
  try {
    await newEvent
      .save()
      .then((event) => {
        res.status(200).json(event);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(501).json({ message: "Server error!!", error });
  }
};

// GET ALL EVENT
const readAll = async (req, res) => {
  try {
    await Event.find()
      .then((events) => {
        res.status(200).json(events);
      })
      .catch((error) => {
        res.status(404).json({ message: "Events are non-existence", error });
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET EVENT BY ID
const readOne = async (req, res) => {
  try {
    await Event.findById(req.params.id)
      .then((event) => {
        if (event) {
          return res.status(200).json(event);
        } else {
          return res
            .status(400)
            .json({ status: 0, message: "Event-id is non-existence" });
        }
      })
      .catch((error) => {
        return res
          .status(500)
          .json({status: -1, message: "Server error", error });
      });
  } catch (error) {
    return res.status(500).json({ status: -1, message: "Server error", error });
  }
};

// UPDATE EVENT
const update = async (req, res) => {
  try {
    updateEvent = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      time: req.body.time,
    };

    await Event.findByIdAndUpdate(
      req.params.id,
      { $set: updateEvent },
      {
        new: true,
      }
    )
      .then((event) => {
        res
          .status(200)
          .json({
            status: 1,
            message: `${req.params.id} update successfully`,
            event,
          });
      })
      .catch((error) => {
        res
          .status(404)
          .json({ status: 0, message: "Event-id is non-existence", error });
      });
  } catch (error) {
    error.json({
      status: -1,
      message: "Server error",
      error: error.message,
    });
  }
};

// DELETE EVENT
const remove = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id)
      .then((event) => {
        res.status(200).json({
          status: 1,
          message: `Event ${req.params.id} delete successfully`,
        });
      })
      .catch((error) => {
        res.status(404).json({
          status: 0,
          message: "Event-id is non-existence",
          error,
        });
      });
  } catch (error) {
    res.json({
      status: -1,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { create, readOne, readAll, update, remove };
