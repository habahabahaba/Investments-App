// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:

function NumInput({ name, value, changeHandler, min, step, error = '' }) {
  // JSX:
  return (
    <div>
      <label htmlFor={name.replaceAll(' ', '-')}>{name}</label>
      <input
        type='number'
        id={name.replaceAll(' ', '-')}
        min={min}
        step={step}
        value={value || ''}
        onChange={changeHandler}
      />
      <span>{error}</span>
    </div>
  );
}

export default NumInput;
