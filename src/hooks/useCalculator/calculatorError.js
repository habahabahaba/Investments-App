export default function calculatorError(state) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    state;

  const error = {};

  error.initialInvestment =
    initialInvestment < 0 ? 'Please enter a positive amount' : null;

  error.annualInvestment =
    annualInvestment < 0 ? 'Please enter a positive amount' : null;

  error.expectedReturn = null;

  error.duration =
    duration !== '' && duration < 1 ? 'Minimum duration is one year' : null;

  return error;
}
