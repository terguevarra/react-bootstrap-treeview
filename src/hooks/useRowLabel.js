import React, {useState, useEffect} from 'react';

function useRowLabel(rowData, label){
    const [rowLabel, setRowLabel] = useState('');

    useEffect(() => {
        setRowLabel(renderLabel());
    }, [rowData])

    function renderLabel(){
        if(typeof label === 'string') return rowData[label];
        else return label(rowData);
    }

    return {
        rowLabel
    }
}

export default useRowLabel;