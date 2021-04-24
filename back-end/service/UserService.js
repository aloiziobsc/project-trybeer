const { user: User } = require('../models');
const { NOT_FOUND } = require('../schema/statusSchema');

// Verify id
const verifyId = async (req, res, next) => {
  const { id } = req.params;
  const exist = await User.findByPk(id);

  if (!exist) {
    res.status(NOT_FOUND).json({ message: 'incorrect id' });
  }

  next();
};

module.exports = {
  verifyId,
};
