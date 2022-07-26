const PredictStock = require("../models/PredictStock");

const readAll = async (req, res) => {
    if (!req.query.symbol)
        try {
            const stocks = await PredictStock.find({}).catch((error) => {
                return res.status(404).json({ message: "Stocks are non-existence", error });
            });
            return res.status(200).json(stocks.map(stock => {
                return {
                    _id: stock._id,
                    symbol: stock.symbol,
                    open: stock._doc.Open,
                    close: stock._doc.Close,
                    low: stock._doc.Low,
                    high: stock._doc.High,
                    date: stock._doc.Date
                }
            }))
        } catch (error) {
            return res.status(500).json(error.message)
        }

    let symbol = req.query.symbol

    try {
        const stocks = await PredictStock.find({ symbol: symbol }).catch((error) => {
            return res.status(404).json({ message: "Stocks are non-existence", error });
        });
        return res.status(200).json(stocks.map(stock => {
            return {
                _id: stock._id,
                symbol: stock.symbol,
                open: stock.Open,
                close: stock.Close,
                low: stock.Low,
                high: stock.High,
                date: stock.Date
            }
        }))
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { readAll };
