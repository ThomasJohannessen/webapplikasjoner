import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';


test('should start state at 0', () => {
    render(<App />);
    const result = document.querySelector('h1');
    expect(result).toHaveTextContent('0');
});

test('should count when button pressed', () => {
    render(<App />);

    const result = document.querySelector('h1');
    expect(result).toHaveTextContent('0');
    fireEvent.click(screen.getByText('Click to increase counter'));
    expect(result).toHaveTextContent('1');
});

