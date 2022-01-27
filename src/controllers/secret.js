const home = (req, res) => {
  res.status(200).send("Hello secret")
}

module.exports = { home }
