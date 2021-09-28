import { render, screen } from "@testing-library/react";
import TipSelection from "../../components/TipSelection";

describe('TipSelection', () => {
 it('renders list of default tip options', () => {
  
  // render(<TipSelection />)
  expect(screen.getAllByText('5%')).toBeInTheDocument()
  expect(screen.getAllByText('10%')).toBeInTheDocument()
  expect(screen.getAllByText('15%')).toBeInTheDocument()
  expect(screen.getAllByText('25%')).toBeInTheDocument()
  expect(screen.getAllByText('50%')).toBeInTheDocument()
 });
});
