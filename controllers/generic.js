function test(req, res, next) {
  res.json({ message: "Test Successful", headers: req.headers });
}

module.exports = {
  test,
};
