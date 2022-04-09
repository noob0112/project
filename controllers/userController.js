const User = require("../models/User");

// GET ALL USER
const readAll = async (req, res) => {
  try {
    if(req.user.isAdmin){
      const users = await User.find();
      return res.status(200).json(users);
    } else {
      const users = await User.find({}, '-_id name phone email');
      return res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET USER BY ID
const readOne = async (req, res) => {
  try {
    if(req.user.isAdmin){
      await User.findById(req.params.id)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((error) => {
        return res
          .status(400)
          .json({ status: 0, message: "User-id is non-existence", error });
      });
    } else {
      await User.findById(req.params.id, '-_id name phone email')
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((error) => {
        return res
          .status(400)
          .json({ status: 0, message: "User-id is non-existence", error });
      });
    }
    
  } catch (error) {
    return res.status(500).json({ status: -1, message: "Server error", error });
  }
};

// UPDATE USER
const update = async (req, res) => {
  try {
    if(!req.user.isAdmin){
      data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
      }
    } else {
      data = req.body
    }

    // return res.send(data)

    await User.findByIdAndUpdate(
      req.params.id,
      { $set: data },
      { 
        new: true,
        select: {isAdmin: 0}
      },
    )
      .then((user) => {
        res
          .status(200)
          .json({ status: 1, message: `${req.params.id} update successfully` });
      })
      .catch((error) => {
        res
          .status(404)
          .json({ status: 0, message: "User-id is non-existence", error });
      });
  } catch (error) {
    error.json({
      status: -1,
      message: "Server error",
      error: error.message,
    });
  }
};

// DELET USER
const remove = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res
      .status(200)
      .json({ status: 1, message: `User ${req.params.id} delete successfully` });
    })
    .catch(error => {
      res.status(404).json({
        status: 0,
        message: "User-id is non-existence",
        error
      })
    })
  } catch (error) {
    res.json({
      status: -1,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { readOne, readAll, update, remove };
