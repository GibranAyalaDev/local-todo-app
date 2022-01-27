const home = (req, res) => {
  res.status(200).send("Hello note")
}

module.exports = { home }
