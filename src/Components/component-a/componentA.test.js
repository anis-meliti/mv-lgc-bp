import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ComponentA from './ComponentA';

describe('ComponentA', () => {
  test('increments counter on button click', () => {
    const { getByText } = render(<ComponentA />);
    const addButton = getByText('Add');
    const counterDisplay = getByText('0');

    fireEvent.click(addButton);

    expect(counterDisplay.textContent).toBe('1');
  });
});
