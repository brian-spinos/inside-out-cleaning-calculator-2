import {render, fireEvent} from '@testing-library/react'


import SecondCalculator from '../../components/SecondCalculator'

describe('SecondCalculator', () => {
  it('works', () => {
    let component = render(<SecondCalculator />);

    let input1 = component.getByTestId('2-payment-hr');
    fireEvent.change(input1, {
      target: {
        value: '100'
      }
    });

    let input2 = component.getByTestId('2-hours-worked-h');
    fireEvent.change(input2, {
      target: {
        value: '1'
      }
    });

    let input3 = component.getByTestId('2-hours-worked-m');
    fireEvent.change(input3, {
      target: {
        value: '30'
      }
    });

    expect(component.getByTestId('2-total-payment')).toHaveTextContent('$150');
  });

  it('works', () => {
    let component = render(<SecondCalculator />);

    let input1 = component.getByTestId('2-payment-hr');
    fireEvent.change(input1, {
      target: {
        value: ''
      }
    });

    let input2 = component.getByTestId('2-hours-worked-h');
    fireEvent.change(input2, {
      target: {
        value: ''
      }
    });

    let input3 = component.getByTestId('2-hours-worked-m');
    fireEvent.change(input3, {
      target: {
        value: ''
      }
    });

    expect(component.getByTestId('2-total-payment')).toHaveTextContent('$0');
  });

  it('works', () => {
    let component = render(<SecondCalculator />);

    let input1 = component.getByTestId('2-payment-hr');
    fireEvent.change(input1, {
      target: {
        value: 'aaa'
      }
    });

    let input2 = component.getByTestId('2-hours-worked-h');
    fireEvent.change(input2, {
      target: {
        value: 'bbb'
      }
    });

    let input3 = component.getByTestId('2-hours-worked-m');
    fireEvent.change(input3, {
      target: {
        value: 'ccc'
      }
    });

    expect(component.getByTestId('2-total-payment')).toHaveTextContent('$0');
  });

  it('works', () => {
    let component = render(<SecondCalculator />);

    let input1 = component.getByTestId('2-payment-hr');
    fireEvent.change(input1, {
      target: {
        value: '100'
      }
    });

    let input2 = component.getByTestId('2-hours-worked-h');
    fireEvent.change(input2, {
      target: {
        value: 'bbb'
      }
    });

    let input3 = component.getByTestId('2-hours-worked-m');
    fireEvent.change(input3, {
      target: {
        value: 'ccc'
      }
    });

    expect(component.getByTestId('2-total-payment')).toHaveTextContent('$0');
  });
});