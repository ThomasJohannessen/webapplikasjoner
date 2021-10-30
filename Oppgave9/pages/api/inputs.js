const inputs = []

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { input } = req.body

    if (input.length > 10) {
      res.status(400).json({ message: 'Text to long' })
    } else {
      inputs.push(input)
      res.status(201).json(inputs)
    }
  } else {
    res.status(200).json(inputs)
  }
}
