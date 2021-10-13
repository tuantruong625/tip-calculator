import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import TipSelection from "../../components/TipSelection";

describe('TipSelection', () => {
 it('renders list of default tip options', () => {
  const options: number[] = [0.05, 0.10, 0.15, 0.25, 0.50]

  render(<TipSelection tipOptions={options} />)
  expect(screen.getByText('5%')).toBeInTheDocument()
  expect(screen.getByText('10%')).toBeInTheDocument()
  expect(screen.getByText('15%')).toBeInTheDocument()
  expect(screen.getByText('25%')).toBeInTheDocument()
  expect(screen.getByText('50%')).toBeInTheDocument()
 });

 it.skip('sets selected tip option styling', async () => {
  const options: number[] = [0.05, 0.10, 0.15, 0.25, 0.50]
  render(<TipSelection tipOptions={options} />)

  const selectedTipOptionButton = await screen.findByText('15%')

  fireEvent.click(selectedTipOptionButton as HTMLButtonElement)
  expect(selectedTipOptionButton).toHaveClass('bg-green-500')
 });
});
