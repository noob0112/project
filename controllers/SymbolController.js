const Symbol = require("../models/Symbol");

const create = async (req, res) => {
  const newSymbol = new Symbol({
    symbolCode: req.body.symbolCode,
  });
  try {
    await newSymbol
      .save()
      .then((symbol) => {
        res.status(200).json(symbol);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(501).json({ message: "Server error!!", error });
  }
};

// GET ALL SYMBOL
const readAll = async (req, res) => {
  try {
    await Symbol.find()
      .then((symbols) => {
        res.status(200).json(symbols);
      })
      .catch((error) => {
        res.status(404).json({ message: "Symbols are non-existence", error });
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET SYMBOL BY ID
const readOne = async (req, res) => {
  try {
    await Symbol.findById(req.params.id)
      .then((symbol) => {
        if (symbol) {
          return res.status(200).json(symbol);
        } else {
          return res
            .status(400)
            .json({ status: 0, message: "Symbol-id is non-existence" });
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

// UPDATE SYMBOL
const update = async (req, res) => {
  try {
    updateSymbol = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      time: req.body.time,
    };

    await Symbol.findByIdAndUpdate(
      req.params.id,
      { $set: updateSymbol },
      {
        new: true,
      }
    )
      .then((symbol) => {
        res
          .status(200)
          .json({
            status: 1,
            message: `${req.params.id} update successfully`,
            symbol,
          });
      })
      .catch((error) => {
        res
          .status(404)
          .json({ status: 0, message: "Symbol-id is non-existence", error });
      });
  } catch (error) {
    error.json({
      status: -1,
      message: "Server error",
      error: error.message,
    });
  }
};

// DELETE SYMBOL
const remove = async (req, res) => {
  try {
    await Symbol.findByIdAndDelete(req.params.id)
      .then((symbol) => {
        res.status(200).json({
          status: 1,
          message: `Symbol ${req.params.id} delete successfully`,
        });
      })
      .catch((error) => {
        res.status(404).json({
          status: 0,
          message: "Symbol-id is non-existence",
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
