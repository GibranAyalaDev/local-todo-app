const home = (req, res) => {
  res.status(200).send("Hello todo")
}

module.exports = { home }
