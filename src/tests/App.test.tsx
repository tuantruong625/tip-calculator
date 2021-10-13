import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App', () => {
 it.skip('renders bill input', async () => {
  render(<App />)
  const billInput = await screen.getByPlaceholderText('Enter bill...')

  expect(billInput).toBeInTheDocument()
 })
});
