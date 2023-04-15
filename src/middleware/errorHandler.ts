import type { ErrorRequestHandler } from 'express'

export const globalErrorHandler: ErrorRequestHandler = (err: Error, _, res) => {
	console.log(err.stack)
	console.log(err.name, err.message)
	res.status(500).json({ msg: 'Internal server error' })
}
