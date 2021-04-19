import React, { useState } from 'react';

import clsx from  'clsx';

import useToggleRow from '../../hooks/useRowToggle';
import useRowLabel from '../../hooks/useRowLabel';

import useRowStyles from './Row.styles';

import Actions from '../Actions';


function Row({rowData, label, idName, actions, level = 1}){
    const {isOpen, toggleRow, icon} = useToggleRow(false);
    const { rowLabel } = useRowLabel(rowData, label);
    const [levelNum] = useState(level + 1);
    const classes = useRowStyles({levelNum: level});

    return(
        <>
            <tr>
                <td className={classes.tdContentStyle} onClick={toggleRow}>
                    <span className={clsx(classes.marginLeft, classes.label)}>
                        <span className={classes.marginLeft}>
                            {rowData.__children?.length > 0 && <i className={icon}></i>} 
                        </span>
                        &nbsp; 
                        {rowLabel}
                    </span>
                    <span className={classes.actions} onClick={(e) => e.stopPropagation()}>
                        <Actions actions={actions} rowData={rowData} />
                    </span>
                </td>
            </tr>
            {
                (rowData.__children?.length > 0 && isOpen ) && (
                    rowData.__children.map((row) => (
                        <Row rowData={row} label={label} idName={idName} actions={actions} key={row[idName]} level={levelNum} />
                    ))
                )
            }
        </>
    );
}

export default Row;