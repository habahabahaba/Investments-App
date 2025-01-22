// Utils:
import { calculateInvestmentResults } from '../../util/investment';
// React:
import { useReducer } from 'react';

import calculatorReducer from './calculatorReducer';
import calculatorError from './calculatorError';
const initInputState = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: '',
};

export default function useCalculator() {
  const [inputState, inputDispatch] = useReducer(
    calculatorReducer,
    initInputState
  );
  console.log('[useCalculator] inputState: ', inputState);
  const error = calculatorError(inputState);

  let investmentResults = [];
  if (
    !error.initialInvestment &&
    !error.annualInvestment &&
    !error.expectedReturn &&
    !error.duration
  ) {
    investmentResults = calculateInvestmentResults(inputState);
  }

  return { inputState, inputDispatch, investmentResults, error };
}
