import express from 'express'
import { Request, Response } from 'express'
import { readFile } from 'node:fs/promises'
import { setupEnvVars } from './utils/setupEnvVars'

const envs = new Map([
	['MODE', 'dev'],
	['FOO', 'bar'],
])

setupEnvVars(envs)

const app = express()
const port = 30042

console.log(process.env.MODE)

app.get('/', async (_: Request, res: Response) => {
	res.send(
		await readFile('src\\views\\index.html', {
			encoding: 'utf-8',
		}),
	)
})

app.listen(port, () =>
	console.log(`Example app listening on http://localhost:${port}`),
)
