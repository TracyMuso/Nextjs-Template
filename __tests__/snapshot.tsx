/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import Home from '../app/page'

it('renders greeting 3', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
