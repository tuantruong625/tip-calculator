import { render, screen } from "@testing-library/react";
import BaseInput from "../../components/BaseInput";

describe('BaseInput', () => {
 it('renders a label', async () => {
  const labelString = 'foo'
  render(<BaseInput label={labelString} />)
  expect(await screen.findByText(labelString)).toBeInTheDocument()
 });
});
