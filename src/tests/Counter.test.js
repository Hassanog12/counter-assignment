// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

  
  test('renders counter message', () => {
    render(<Counter />);
    const counterMessage = screen.getByTestId(/count/i);
    expect(counterMessage).toBeInTheDocument();
  });
  
  test('should render initial count with value of 0', () => {
    const { getByTestId } = render(<Counter />);
    const countElement = getByTestId('count');
    expect(countElement).toHaveTextContent('0');

  }); 
  
  test('clicking + increments the count', () => {
    render(<Counter />);
    const plusButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusButton);
    const countDisplay = screen.getByTestId('count');
    expect(countDisplay).toHaveTextContent('1');
  });
  
  test('clicking - decrements the count', () => {
    render(<Counter />);
    const minusButton = screen.getByRole('button', { name: '-' });

    fireEvent.click(minusButton);

    const countDisplay = screen.getByTestId('count');
    expect(countDisplay).toHaveTextContent('-1');
  }); 
