import React from 'react';
import './tableHead.css';

const TableHead = ({ items }) => {
    const elements = items.map((item) => {
        return (
            <th key={item}>{item}</th>
        )
    });

    return (
        <thead>           
            <tr>
                {elements}
            </tr>
        </thead>
    );
}

export default TableHead;