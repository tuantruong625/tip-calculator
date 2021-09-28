import { render, screen } from "@testing-library/react";
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
});
