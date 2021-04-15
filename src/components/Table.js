import React, { useState, useEffect } from 'react';

import Row from './Row';

import { ListToTree } from '../utility';

function Table({
    list, 
    idName, 
    parentIdName, 
    label,
    tableClassName
}){
    const [treeList, setTreeList] = useState([]);

    useEffect(() => {
        setTreeList(ListToTree(list, idName, parentIdName));
    }, [list]);



    return(
        <>
            <table className={tableClassName}>
                <tbody>
                    {treeList.map((row) => (
                        <Row    rowData={row} 
                                label={label}
                                idName={idName} 
                                key={row[idName]}
                                isParent={true} />
                    ))}
                </tbody>
                
            </table>
        </>
    );
}

export default Table;