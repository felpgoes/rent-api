// import { User } from '@entities/User'

test('it should be ok', () => {
  const user = { name: '' }// 'new User()

  user.name = 'John Doe'

  expect(user.name).toEqual('John Doe')
})
