import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import FullButton from '../../../../../app/shared/components/full-button/full-button'

test('FullButton component renders correctly', () => {
  const tree = renderer.create(<FullButton onPress={() => {}} text='hi' />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('onPress', () => {
  let i = 0
  const onPress = () => i++
  const wrapperPress = shallow(<FullButton onPress={onPress} text='hi' />)

  expect(wrapperPress.prop('onPress')).toBe(onPress) // the component's onPress uses the right handler
  expect(i).toBe(0)
  wrapperPress.simulate('press')
  expect(i).toBe(1)
})
