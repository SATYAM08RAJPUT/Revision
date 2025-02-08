import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button.jsx';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('should render button with correct text (children)', () => {
    render(
      <Button onClick={() => {}} classNameButton="my-button">
        Click me
      </Button>
    );

    // Check if button text is rendered
    const button = screen.getByText(/Click me/i);
    expect(button).toBeInTheDocument();
  });

  test('should call onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button onClick={onClickMock} classNameButton="my-button">
        Click Me
      </Button>
    );

    // Fire a click event
    fireEvent.click(screen.getByText(/Click Me/i));

    // Check if onClick was called
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should apply the correct class name', () => {
    render(
      <Button onClick={() => {}} classNameButton="my-button">
        Click Me
      </Button>
    );

    // Check if button has the correct class
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveClass('my-button');
  });
});
