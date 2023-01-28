import renderer from 'react-test-renderer'
import Avatar from './Avatar'

it('renders snapshot atoms avatar', () => {
  const tree = renderer
    .create(
      <Avatar uri="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
