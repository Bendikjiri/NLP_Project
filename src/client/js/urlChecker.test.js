import { checkForUrl } from './urlChecker'

test('checking module', () => {
    expect(checkForUrl('https://www.google.com')).toBe(true)
    expect(checkForUrl('1.1.1.1')).toBe(false)
})