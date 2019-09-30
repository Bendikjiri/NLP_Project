import { handleSubmit } from './formHandler'

test('checking module', () => {
    expect(handleSubmit).toBeInstanceOf(Function)
})