import {render, fireEvent} from '@testing-library/react'


import FirstCalculator from '../../components/FirstCalculator'

describe('FirstCalculator', () => {
  it('works', () => {
    let component = render(<FirstCalculator />);

    let input1 = component.getByTestId('total-payment');
    fireEvent.change(input1, {
      target: {
        value: '100'
      }
    });

    let input2 = component.getByTestId('payment-hr');
    fireEvent.change(input2, {
      target: {
        value: '50'
      }
    });

    expect(component.getByTestId('hours-worked')).toHaveTextContent('2:00:00 Hrs');
  });

  it('works', () => {
    let component = render(<FirstCalculator />);

    let input1 = component.getByTestId('total-payment');
    fireEvent.change(input1, {
      target: {
        value: '0'
      }
    });

    let input2 = component.getByTestId('payment-hr');
    fireEvent.change(input2, {
      target: {
        value: '0'
      }
    });

    expect(component.getByTestId('hours-worked')).toHaveTextContent('00:00:00 Hrs');
  });

  it('works', () => {
    let component = render(<FirstCalculator />);

    let input1 = component.getByTestId('total-payment');
    fireEvent.change(input1, {
      target: {
        value: ''
      }
    });

    let input2 = component.getByTestId('payment-hr');
    fireEvent.change(input2, {
      target: {
        value: ''
      }
    });

    expect(component.getByTestId('hours-worked')).toHaveTextContent('00:00:00 Hrs');
  });

  it('works', () => {
    let component = render(<FirstCalculator />);

    let input1 = component.getByTestId('total-payment');
    fireEvent.change(input1, {
      target: {
        value: 'aaa'
      }
    });

    let input2 = component.getByTestId('payment-hr');
    fireEvent.change(input2, {
      target: {
        value: 'bbb'
      }
    });

    expect(component.getByTestId('hours-worked')).toHaveTextContent('00:00:00 Hrs');
  });

  it('works', () => {
    let component = render(<FirstCalculator />);

    let input1 = component.getByTestId('total-payment');
    fireEvent.change(input1, {
      target: {
        value: '100'
      }
    });

    let input2 = component.getByTestId('payment-hr');
    fireEvent.change(input2, {
      target: {
        value: 'bbb'
      }
    });

    expect(component.getByTestId('hours-worked')).toHaveTextContent('00:00:00 Hrs');
  });
});