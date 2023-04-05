import express from 'express'

import { connect } from 'mongoose'

console.log(process.env.CONNECTION_STRING)

connect(process.env.CONNECTION_STRING as string, {}).then(
	() => console.log('Connected'),
	err => console.error('Failed', err),
)

const app = express()
const port = 30042

app.get('/', async (_, res) => {
	res.send('Hello world!')
})

app.listen(port, () =>
	console.log(`Example app listening on http://0.0.0.0:${port}`),
)
