import React, { useState, useEffect } from 'react';

import useToggleRow from '../hooks/useRowToggle';
import useRowLabel from '../hooks/useRowLabel';

function Row({rowData, label, idName, level = 1}){
    const {isOpen, toggleRow, icon} = useToggleRow(false);
    const { rowLabel } = useRowLabel(rowData, label);
    const [levelNum, setLevelNum] = useState(level);

    useEffect(() => {
        setLevelNum(level + 1);
    }, []);

    return(
        <>
            <tr onClick={toggleRow}>
                <td width="10%">{rowData.children?.length > 0 && <i className={icon} style={{marginLeft: `${levelNum * 9}px`}}></i>}</td>
                <td><span style={{marginLeft: `${levelNum * 9}px`}}>{rowLabel}</span></td>
            </tr>
            {
                (rowData.children?.length > 0 && isOpen ) && (
                    rowData.children.map((row) => (
                        <Row rowData={row} label={label} idName={idName} key={row[idName]} level={levelNum} />
                    ))
                )
            }
        </>
    );
}

export default Row;