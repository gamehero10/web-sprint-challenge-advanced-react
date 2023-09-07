// Write your tests here
import React from 'react';
import {render, screen, userEvent, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import AppClass from './AppClass';


test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', () => {
  render(<AppClass />)
})

test('renders h3 coordinates', () => {
  render(<AppClass/>)
  const coordinates = screen.getByText(/coordinates/i)
  expect(coordinates).toBeInTheDocument();
})

test('renders B', () => {
  render(<AppClass />)
  const b = screen.getByText(/b/i)
  expect(b).toBeInTheDocument();
})

test('renders moved', () => {
  render(<AppClass />)
  const moved = screen.getByText(/moved/i)
  expect(moved).toBeInTheDocument();
})

test ('renders email', () => {
  render(<AppClass />)
  const email = screen.getByPlaceholderText(/type email/i);
  expect(email).toBeInTheDocument()
})

test ('Typing in email', () => {
  render(<AppClass />)
  const email = screen.getByPlaceholderText(/type email/i);
  fireEvent.click(email)
})


