import User from "../models/User.js";

export const createUser = async (req, res, next) => {
  try {
    const user = new User({
      ...req.body,
    });
    await user.save();
    res.status(200).send("A new user has been added to the database. Hurray!!");
  } catch (error) {
    next(err);
  }
};
