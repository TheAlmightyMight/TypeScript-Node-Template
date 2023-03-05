import { sum } from '../src/utils/sum'

describe('first', () => {
	it('should add 1 & 2', () => {
		expect(sum(1, 2)).toBe(3)
	})
})
