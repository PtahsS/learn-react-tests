import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('App renders', () => {
    render(<App />);

    // screen.debug();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/Find Course/)).toBeInTheDocument();
  });

  it ('Typing in searchbox works', () => {
    render(<App /> );

    expect (screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  });

  it ('Search filter is working', () => {
    render(<App />);

    expect(screen.getByText(/css/)).toBeInTheDocument();
    expect(screen.getByText(/Javascript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/css/)).toBeNull();
    expect(screen.queryByText(/Javascript/)).toBeInTheDocument();
  })
})
