import React, { useState, useEffect } from 'react';

import Row from './Row';

import { ListToTree } from '../utility';

function Table({list, idName, parentIdName, label, padding}){
    const [treeList, setTreeList] = useState([]);

    useEffect(() => {
        setTreeList(ListToTree(list, idName, parentIdName));
    }, [list]);



    return(
        <>
            <table className="table">
                <tbody>
                    {treeList.map((row) => (
                        <Row    rowData={row} 
                                label={label}
                                idName={idName} 
                                key={row[idName]}
                                padding={padding}
                                isParent={true} />
                    ))}
                </tbody>
                
            </table>
        </>
    );
}

export default Table;