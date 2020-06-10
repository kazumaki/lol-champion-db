import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

describe('App standard naviagation', () => {
  test('Renders correctly', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app.container.innerHTML).toContain('Champion');
  });

  test('Click on champions button', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Champions'));
    expect(app.queryByPlaceholderText('Champion name').value).toBe('');
  });

  test('Insert text into champions name filter', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const input = app.getByPlaceholderText('Champion name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(app.getByPlaceholderText('Champion name').value).toBe('test');
  });

  test('Select Assassin Tag Filter and expects Ahri to appears on Champion List since Ahri is an Assassin', async () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const input = app.getByText('All');
    fireEvent.change(input, { target: { value: 'Assassin' } });
    setTimeout(() => expect(app.container.innerHTML).toContain('Ahri'), 500);
  });
});
