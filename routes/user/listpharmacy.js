const pharmacy = require("../../models/pharmacy");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let Pharmacies = await pharmacy.findOne({ id });
    res.status(200).json({ status: true, data: Pharmacies });
  } catch (err) {
    res.status(500).json({ status: false, error });
  }
};
