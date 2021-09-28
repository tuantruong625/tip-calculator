import BaseHeader from '../../components/BaseHeader';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Header Component', () => {
 it('Renders a title', async () => {
  render(<BaseHeader title="My Header" />)
  expect(await screen.findByText('My Header')).toBeInTheDocument()
 })
});
