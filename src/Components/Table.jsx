// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
// Context:
// Hooks:
// Components:
// CSS:

function Table({ columnLabels, renderFns, data, id, className }) {
  // Props check:
  if (
    !columnLabels ||
    !renderFns ||
    !columnLabels.length ||
    columnLabels.length !== renderFns.length
  ) {
    throw new Error(
      'You must provide a label and a render function for all the columns !'
    );
  }

  console.log('[Table] data: ', data);

  // JSX:
  const head = (
    <thead>
      <tr>
        {columnLabels.map((label, idx) => (
          <th key={`${idx}-${label}`}>{label}</th>
        ))}
      </tr>
    </thead>
  );

  const body = (
    <tbody>
      {data.map((dataObj, idx) => (
        <TableRow renderFns={renderFns} dataObj={dataObj} key={idx} />
      ))}
    </tbody>
  );

  return (
    <table className={className} id={id}>
      {head}
      {body}
    </table>
  );
}

export default Table;

function TableRow({ renderFns, dataObj }) {
  return (
    <tr>
      {Object.values(dataObj).map((dataPoint, idx) => (
        <td key={idx}>{renderFns[idx](dataPoint)}</td>
      ))}
    </tr>
  );
}
