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

const find = () => {
  return Band.find().exec();
};

const create = data => {
  return Band.create(data).exec();
};

module.exports = {
  find,
  create,
};
