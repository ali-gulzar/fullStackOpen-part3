require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001

logger.token('bodyData', (req) => JSON.stringify(req.body))

app.use(express.json())
app.use(cors())
app.use(logger(':method :url :status :response-time ms :bodyData'))
app.use(express.static('build'))

app.get('/', (request, response) => {
    response.send('Persons API')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(res => response.json(res))
        .catch(error => next(error))
})

app.get('/info', (_request, response) => {
    Person.countDocuments().then((number) => {
        const date = new Date()
        response.send(`<p>Phone book has info for ${number} people </p> <p>${date}</p>`)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id).then(() => {
        response.status(204).end()
    }).catch(error => console.log(error))
})

app.post('/api/persons', (request, response, next) => {
    const person = request.body
    if (!person.name) {
        response.json({error: 'Please define person name'}).status(403).end()
    } else if (!person.number) {
        response.json({error: 'Please define person number'}).status(403).end()
    }
    const personDB = new Person({
        name: person.name,
        number: person.number
    })
    personDB.save().then(savedPerson => {
        response.json(savedPerson)
    }).catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const person = request.body
    const updatePerson = {
        name: person.name,
        number: person.number,
    }
    Person.findByIdAndUpdate(person.id, updatePerson, { new: true })
        .then(updatedPerson => response.json(updatedPerson))
        .catch(error => next(error))
})

const unknownEndpoint = (_request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, _request, response, next) => {
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        console.log('There is a validation error')
        console.log(error.errors.name.properties.message)
        return response.send({ error: error.errors.name.properties.message }).status(404)
    }
    next(error)
}
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
