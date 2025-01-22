export const calculatorActions = {
  initialInvestment: 'SET_INITIAL_INVESTMENT',
  annualInvestment: 'SET_ANNUAL_INVESTMENT',
  expectReturn: 'SET_EXPECTED_RETURN',
  duration: 'SET_DURATION',
};

export default function calculatorReducer(state, { name, payload }) {
  console.log('[Calculator] reducer action: ', { name, payload });
  const newValue = payload.value;
  switch (name) {
    case calculatorActions.initialInvestment:
      return { ...state, initialInvestment: +newValue };
    case calculatorActions.annualInvestment:
      return { ...state, annualInvestment: +newValue };
    case calculatorActions.expectReturn:
      return { ...state, expectedReturn: +newValue };
    case calculatorActions.duration:
      return { ...state, duration: +newValue };

    default:
      throw new Error('Invalid Calculator Action !');
  }
}
