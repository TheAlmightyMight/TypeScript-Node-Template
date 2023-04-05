import express from 'express'
import { Request, Response } from 'express'
import { setupEnvVars } from './utils/setupEnvVars'

const envs = new Map([['FOO', 'bar']])

setupEnvVars(envs)

const app = express()
const port = 30042

console.log(process.env.FOO)

app.get('/', async (_: Request, res: Response) => {
	res.send('Hello world!')
})

app.listen(port, () =>
	console.log(`Example app listening on http://localhost:${port}`),
)
