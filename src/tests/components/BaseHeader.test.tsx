import BaseHeader from '../../components/BaseHeader';
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
 it('Renders a title', async () => {
  render(<BaseHeader title="Header" />)
  expect(await screen.findByText('Head')).toBeInTheDocument()
  expect(await screen.findByText('er')).toBeInTheDocument()
 })
});
