import React,  { useState, useEffect } from 'react';

import ReactBootstrapTreeview from './ReactBootstrapTreeview';

function Demo(){
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData(){
        //let response = await (await fetch('http://localhost:1234/sample1mildata.json')).json();
        let response = await (await fetch('http://localhost:1234/sampledata.json')).json();
        setData(response);
    }
    

    return(
        <div className="container">
            <ReactBootstrapTreeview     list={data}
                                        idName="ApprovalItemId"
                                        parentIdName="ApprovalItemParentId"
                                        label={rowData => `${rowData.RefNo} - ${rowData.ApprovalItemName}`} 
                                        actions={[
                                            {
                                                icon: 'bi bi-plus',
                                                buttonClass: 'btn-primary',
                                                onClick: (e, rowData) => {
                                                    console.log(e, rowData);
                                                }
                                            },
                                            rowData => ({
                                                icon: 'bi bi-trash',
                                                buttonClass: 'btn-danger',
                                                onClick: (e, rowData) => {
                                                    console.log(e, rowData);
                                                },
                                                disabled: rowData?.__children.length > 0 ? true : false
                                            })
                                        ]}/>
        </div>
    );
}

export default Demo;