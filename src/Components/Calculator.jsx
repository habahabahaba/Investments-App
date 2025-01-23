// Utils:
import { formatter } from '../util/investment';
// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
import useCalculator from '../hooks/useCalculator/useCalculator';
// Components:
import InputForm from './InputForm';
import ResultsTable from './ResultsTable';

function Calculator() {
  // State:
  const { inputState, inputDispatch, investmentResults, error } =
    useCalculator();
  console.log('[Calculator] reducer inputState: ', inputState);

  // JSX:
  const table =
    // If all inputs are filled
    Object.values(inputState).every((value) => value !== '') &&
    // If there are no errors
    Object.values(error).every((value) => !value) ? (
      <ResultsTable investmentResults={investmentResults} />
    ) : null;

  return (
    <>
      <InputForm
        inputValues={inputState}
        inputDispatch={inputDispatch}
        error={error}
      />
      {table}
    </>
  );
}

export default Calculator;
