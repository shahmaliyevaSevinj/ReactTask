import React from 'react';

const TableBody = ({ component, tableElemets }) => {
    return (
        <tbody>
            {tableElemets.map(element =>
                <tr key={element.id}>
                    {component.items.map((item) =>
                        <td key={element.id + item}>{element[item]}</td>
                    )}
                </tr>)}

        </tbody>
    )
}
export default TableBody;