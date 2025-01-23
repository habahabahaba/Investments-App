// Utils:
import { formatter } from '../util/investment';
// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
import Table from './Table';
// CSS:

function ResultsTable({ investmentResults }) {
  // Render functions:
  const renderFns = [
    // Do not format year number
    (y) => {
      return y;
    },
  ].concat(
    // Currency formatters
    new Array(4).fill((data) => formatter.format(data))
  );

  // JSX:
  return (
    <Table
      columnLabels={[
        'Year',
        'Investment Value',
        'Interest (Year)',
        'Total Interest',
        'Invested Capital',
      ]}
      renderFns={renderFns}
      data={investmentResults}
      className=''
      id='results'
    />
  );
}

export default ResultsTable;
