import { ErrorRequestHandler } from 'express'

export const isAdminHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err) {
		next(err)
	}

	try {
		if (req.headers.authorization) {
			res.send('Authorized')
		} else {
			res.send('Unauthorized')
		}
	} catch (err) {
		next(err)
	}
}
