// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
import NumInput from './NumInput';
// CSS:
import { calculatorActions } from './Calculator';

function InputForm({ inputValues, dispatch }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputValues;
  const handler =
    (actionName) =>
    ({ target: { value } }) => {
      dispatch({
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
          changeHandler={handler(calculatorActions.initInvest)}
        />
        <NumInput
          name='annual investment'
          value={annualInvestment}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.annualInvest)}
        />
      </div>
      <div className='input-group'>
        <NumInput
          name='Expected Return'
          value={expectedReturn}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.expectReturn)}
        />
        <NumInput
          name='Duration'
          value={duration}
          min={0}
          step={1}
          changeHandler={handler(calculatorActions.duration)}
        />
      </div>
    </form>
  );
}

export default InputForm;
