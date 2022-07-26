const PredictStock = require("../models/PredictStock");

const readAll = async (req, res) => {
    if (!req.query.symbol)
        await PredictStock.find({})
            .then((stocks) => {
                return res.status(200).json(stocks);
            })
            .catch((error) => {
                return res.status(404).json({ message: "Stocks are non-existence", error });
            });

    let symbol = req.query.symbol

    console.log(req.query.symbol)

    try {
        await PredictStock.find({ symbol: symbol })
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

module.exports = { readAll };
