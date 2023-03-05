import express from 'express'
import { Request, Response } from 'express'
import { readFile } from 'node:fs/promises'
const app = express()
const port = 30042

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
