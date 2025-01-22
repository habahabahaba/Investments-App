// Utils:
import { formatter } from '../util/investment';
// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import { useReducer } from 'react';
// Context:
// Hooks:
import useCalculator from '../hooks/useCalculator/useCalculator';
// Components:
import InputForm from './InputForm';
import ResultsTable from './ResultsTable';
import Table from './Table';

function Calculator() {
  // State:
  const { inputState, inputDispatch, investmentResults, error } =
    useCalculator();
  console.log('[Calculator] reducer inputState: ', inputState);
  // JSX:
  const table =
    Object.values(inputState).every((value) => value !== '') &&
    Object.values(error).every((value) => !value) ? (
      <Table
        columnLabels={[
          'Year',
          'Investment Value',
          'Interest (Year)',
          'Total Interest',
          'Invested Capital',
        ]}
        renderFns={[
          (y) => {
            return y;
          },
        ].concat(new Array(4).fill((data) => formatter.format(data)))}
        data={investmentResults}
        className=''
        id='result'
      />
    ) : null;

  return (
    <>
      <InputForm
        inputValues={inputState}
        inputDispatch={inputDispatch}
        error={error}
      />
      {/* <ResultsTable results={investmentResults} /> */}
      {table}
    </>
  );
}

export default Calculator;
