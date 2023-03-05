export const setup_env_vars = (args: Map<string, string>) => {
	for (const [key, value] of args) {
		if (process.env[key]) {
			throw new Error('Could not rewrite an already set environment variable')
		}
		process.env[key] = value
	}
}
