const pharmacy = require("../../models/pharmacy");

module.exports = async (req, res) => {
  try {
    let { userId } = req.params;
    let Pharmacies = await pharmacy.find({ userId });
    res.status(200).json({ status: true, data: Pharmacies });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};
 