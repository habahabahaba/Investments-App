// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useReducer } from 'react';
// Context:
// Hooks:
// Components:
import InputForm from './InputForm';
// CSS:
export const calculatorActions = {
  initInvest: 'SET_INITIAL_INVESTMENT',
  annualInvest: 'SET_ANNUAL_INVESTMENT',
  expectReturn: 'SET_EXPECTED_RETURN',
  duration: 'SET_DURATION',
};

// For reducer:
const initState = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function calculatorReducer(state, { name, payload }) {
  console.log('[Calculator] reducer action: ', { name, payload });
  const newValue = payload.value;
  switch (name) {
    case 'SET_INITIAL_INVESTMENT':
      return { ...state, initialInvestment: newValue };
    case 'SET_ANNUAL_INVESTMENT':
      return { ...state, annualInvestment: newValue };
    case 'SET_EXPECTED_RETURN':
      return { ...state, expectedReturn: newValue };
    case 'SET_DURATION':
      return { ...state, duration: newValue };

    default:
      throw new Error('Invalid Calculator Action !');
  }
}

function Calculator() {
  // State:
  const [state, dispatch] = useReducer(calculatorReducer, initState);
  console.log('[Calculator] reducer state: ', state);
  // JSX:
  return (
    <>
      <InputForm inputValues={state} dispatch={dispatch} />
    </>
  );
}

export default Calculator;
