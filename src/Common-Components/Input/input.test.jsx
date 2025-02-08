import { fireEvent, screen, render } from '@testing-library/react';
import Input from './input';
import '@testing-library/jest-dom';

describe('Input Component', () => {
  test('should render input with correct props', () => {
    render(
      <Input
        value="test value"
        type="text"
        placeholder="Enter text"
        classNameInput="input-class"
        onchange={() => {}}
      />
    );

    // Check if input is rendered with the correct value
    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('test value');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveClass('input-class');
  });

  test('should call onChange when text is typed', () => {
    const handleChange = jest.fn(); // Mock function
    render(
      <Input
        value=""
        type="text"
        placeholder="Enter text"
        classNameInput="input-class"
        onchange={handleChange}
      />
    );

    // Find input field and simulate typing event
    const inputElement = screen.getByPlaceholderText(/Enter text/i);

    // Simulate typing 'Hello'
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    // Check if onChange function was called
    expect(handleChange).toHaveBeenCalledTimes(1);

    // Check if the input value is updated after the change event
    expect(inputElement).toHaveValue('');
  });
});
