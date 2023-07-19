import express from 'express'

import { connect } from 'mongoose'

import { globalErrorHandler } from './middleware/errorHandler'

connect(process.env.CONNECTION_STRING as string, {}).then(
	() => console.log('Connected'),
	err => console.error('Failed', err),
)

const app = express()
const port = 5000

app.get('/', async (_, res) => {
	res.send('Hello world!')
})

app.use(globalErrorHandler)

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`))
