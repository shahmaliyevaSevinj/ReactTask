import React from 'react';
import TableHead from '../tableHead/tableHead';
import TableBody from '../tableBody/tableBody';
import './table.css'

const Table = ({ tableParam , elemenents}) => {
    return (
        <div id="body">
            <div id="header">
                <h1>{tableParam.name}</h1>
            </div>

            <table className={`ui inverted ${tableParam.backgroundColor} table`}>
                <TableHead items={tableParam.items} />
                <TableBody component={tableParam} tableElemets={elemenents} />
            </table>
        </div>
    )
}

export default Table;