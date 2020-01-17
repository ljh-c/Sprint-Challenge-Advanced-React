import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('toggle dark mode button is rendered', () => {
  const { getByText } = render(<App />);

  getByText(/toggle dark mode/i);
});

test('title renders', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/title/i);
});

test('fetches players', done => {
  axios.get('http://localhost:5000/api/players')
    .then(response => {
      expect(response.data).toBeTruthy();
      expect(response.data[0]).toEqual({
        name: "Alex Morgan", 
        country: "United States", 
        searches: 100, 
        id: 0});
      done();
    });
});