import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: { /* mock data */ },
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('fetches data on component mount and displays it', async () => {
    const { getByText } = render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(getByText(/mocked data/i)).toBeInTheDocument());
  });

  test('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    const errorMessage = screen.getByText(/failed to fetch/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('handles user interaction with buttons and displays appropriate feedback', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByRole('status')).toHaveTextContent(/processing/i);
  });

  test('validates form inputs on submission and shows error messages if invalid', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.submit(screen.getByRole('form'));
    const errorMessage = screen.getByText(/please enter valid input/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('component is accessible with proper ARIA roles and labels', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: { /* mock data */ },
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('fetches data on component mount and displays it', async () => {
    const { getByText } = render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(getByText(/mocked data/i)).toBeInTheDocument());
  });

  test('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);
    const errorMessage = screen.getByText(/failed to fetch/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('handles user interaction with buttons and displays appropriate feedback', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByRole('status')).toHaveTextContent(/processing/i);
  });

  test('validates form inputs on submission and shows error messages if invalid', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.submit(screen.getByRole('form'));
    const errorMessage = screen.getByText(/please enter valid input/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('component is accessible with proper ARIA roles and labels', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });
});