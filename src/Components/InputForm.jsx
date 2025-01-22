// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
import { calculatorActions } from '../hooks/useCalculator/calculatorReducer';
// Components:
import NumInput from './NumInput';
// CSS:

function InputForm({ inputValues, inputDispatch, error }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputValues;
  const handler =
    (actionName) =>
    ({ target: { value } }) => {
      inputDispatch({
        name: actionName,
        payload: { value: value },
      });
    };
  // JSX:
  return (
    <form id='user-input'>
      <div className='input-group'>
        <NumInput
          name='initial investment'
          value={initialInvestment}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.initialInvestment)}
          error={error.initialInvestment || ''}
        />
        <NumInput
          name='annual investment'
          value={annualInvestment}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.annualInvestment)}
          error={error.annualInvestment || ''}
        />
      </div>
      <div className='input-group'>
        <NumInput
          name='Expected Return'
          value={expectedReturn}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.expectReturn)}
          error={error.expectedReturn || ''}
        />
        <NumInput
          name='Duration'
          value={duration}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.duration)}
          error={error.duration || ''}
        />
      </div>
    </form>
  );
}

export default InputForm;
