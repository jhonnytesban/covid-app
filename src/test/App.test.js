import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';

describe('Test of App', () => {
  test('render of text', () => {
    render(<App />)
    const title = screen.getByText('Este es el componente App')
    const text = screen.getByText(new Date().toISOString().slice(0, 10))

    expect(title.textContent).toBe('Este es el componente App')
    expect(text.textContent).toBe(new Date().toISOString().slice(0, 10))
  })
})