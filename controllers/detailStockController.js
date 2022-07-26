const DetailStock = require("../models/DetailStock");

// GET ALL Stock
const readAll = async (req, res) => {
    let limit = req.query.pageSize || 10
    let skip = limit * (req.query.pageIndex - 1) || 0
    if (skip < 0) skip = 0

    let symbol = req.query.symbol

    try {
        await DetailStock.find({ symbol: symbol })
            .then((detailStocks) => {
                res.status(200).json(detailStocks);
            })
            .catch((error) => {
                res.status(404).json({ message: "DetailStocks are non-existence", error });
            });
    } catch (error) {
        res.status(500).json(error);
    }
};

// GET Stock BY ID
const readOne = async (req, res) => {
    try {
        await DetailStock.findById(req.params.id)
            .then((detailStock) => {
                if (detailStock) {
                    return res.status(200).json(detailStock);
                } else {
                    return res
                        .status(400)
                        .json({ status: 0, message: "DetailStock-id is non-existence" });
                }
            })
            .catch((error) => {
                return res
                    .status(500)
                    .json({ status: -1, message: "Server error", error });
            });
    } catch (error) {
        return res.status(500).json({ status: -1, message: "Server error", error });
    }
};

module.exports = { readOne, readAll };
