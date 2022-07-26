const Stock = require("../models/Stock");

// GET ALL Stock
const readAll = async (req, res) => {
    // let limit = req.query.pageSize || 10
    // let skip = limit * (req.query.pageIndex - 1) || 0
    // if (skip < 0) skip = 0

    // if (!req.query.symbol) res.status(400).json({ message: 'Please query with symbol' })

    let symbol = req.query.symbol

    try {
        await Stock.find({ symbol: symbol })
            .then((stocks) => {
                return res.status(200).json(stocks);
            })
            .catch((error) => {
                return res.status(404).json({ message: "Stocks are non-existence", error });
            });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const findStockToday = async (req, res) => {
    try {
        await Stock.find({ date: { $gte: new Date('2022-03-28T00:00:00.000') } })
            .then((stocks) => {
                return res.status(200).json(stocks);
            })
            .catch((error) => {
                return res.status(404).json({ message: "Stocks are non-existence", error });
            });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const findOneYear = async (req, res) => {
    if (!req.query.symbol) res.status(400).json({ message: 'Please query with symbol' })
    let symbol = req.query.symbol

    try {
        await Stock.find({ symbol: symbol, date: { $gte: new Date('2021-03-28T00:00:00.000') } })
            .then((stocks) => {
                return res.status(200).json(stocks);
            })
            .catch((error) => {
                return res.status(404).json({ message: "Stocks are non-existence", error });
            });
    } catch (error) {
        return res.status(500).json(error);
    }
};

// GET Stock BY ID
const readOne = async (req, res) => {
    try {
        await Stock.findById(req.params.id)
            .then((stock) => {
                if (stock) {
                    return res.status(200).json(stock);
                } else {
                    return res
                        .status(400)
                        .json({ status: 0, message: "Stock-id is non-existence" });
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

module.exports = { readOne, readAll, findStockToday, findOneYear };
