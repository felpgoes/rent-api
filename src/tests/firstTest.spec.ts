import { User } from '@models/Users'

test('it should be ok', () => {
  const user = new User()

  user.name = 'John Doe'

  expect(user.name).toEqual('John Doe')
})
