const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://127.0.0.1:27017/music`)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const bandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    default: "generic",
  },
});

const Band = new mongoose.model("Band", bandSchema);

/**
 * @description Finds bands in mongodb and returns all
 * @returns Mongodb Promise(err, data)
 */
const find = () => {
  return Band.find();
};

const create = data => {
  return Band.create(data);
};

module.exports = {
  find,
  create,
};
