const user = require('../model/user'); // Import your Mongoose User model

module.exports.GetAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const userontroll = await user.findOne({ email: email });

    if (!userontroll) {
      res.status(404).send("User not found");
      return;
    }

    const result = { admin: userontroll.role === 'admin' };
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
}
