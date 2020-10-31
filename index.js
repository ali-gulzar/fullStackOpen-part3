const express = require("express");
const logger = require("morgan");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3001
let personData = require("./db.json");

logger.token('bodyData', (req, res) => JSON.stringify(req.body))

app.use(express.json());
app.use(cors());
app.use(logger(':method :url :status :response-time ms :bodyData'));
app.use(express.static('build'))

app.get('/', (request, response) => {
  response.send('Persons API')
})

app.get('/api/persons', (request, response) => {
  response.json(personData)
})

app.get('/api/persons/:id', (request, response) => {
  const person = personData.find(pd => pd.id === Number(request.params.id))
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
})

app.get('/info', (request, response) => {
  const count = personData.length;
  const date = new Date();
  response.send(`<p>Phone book has info for ${count} people </p> <p>${date}</p>`)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  personData = personData.filter(pd => pd.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const person = request.body;
  if (personData.find(pd => pd.name === person.name)) {
    response.json({error: 'name must be unique'}).status(404).end()
  } else if (!person.name) {
    response.json({error: 'Please define person name'}).status(403).end()
  } else if (!person.number) {
    response.json({error: 'Please define person number'}).status(403).end()
  }
  response.json([...personData, {name: person.name, number: person.number, id: Math.floor(Math.random() * Math.floor(10000000))}])
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
