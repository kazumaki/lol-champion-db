import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App standard naviagation', () => {
  test('Renders correctly', () => {
    const app = render(<App />);
    expect(app.container.innerHTML).toContain('Champion');
  });

  test('Click on champions button', () => {
    const app = render(<App />);
    fireEvent.click(screen.getByText('Champions'));
    expect(app.queryByPlaceholderText('Champion name').value).toBe('');
  });

  test('Insert text into champions name filter', () => {
    const app = render(<App />);
    const input = app.queryByTestId('name-filter');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(app.queryByTestId('name-filter').value).toBe('test');
  });

  test('Insert text into champions name filter', () => {
    const app = render(<App />);
    const input = app.queryByTestId('name-filter');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(app.queryByTestId('name-filter').value).toBe('test');
  });

  test('Select another champion tag filter', () => {
    const app = render(<App />);
    const input = app.queryByTestId('name-filter');
    fireEvent.change(input, { target: { value: 'Assassin' } });
    expect(app.queryByTestId('name-filter').value).not.toBe('All');
  });
});
