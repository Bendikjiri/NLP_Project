import { checkForUrl } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

test('Functions import success', () => {
    expect(checkForUrl).toBeInstanceOf(Function);
    expect(handleSubmit).toBeInstanceOf(Function);
})