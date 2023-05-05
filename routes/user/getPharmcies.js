const User = require("../../models/user");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const users = await User.findById();
    res.status(200).json({ status: true, data: users });
  } catch (err) {
    res.status(400).json({ status: false, error });
  }
};
