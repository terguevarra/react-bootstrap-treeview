import React from 'react';
import clsx from 'clsx';

import useActionStyles from './Actions.styles';

const onClick = (e, action, rowData) => {
    let actionType = {
        'function': () => action(rowData).onClick(e, rowData),
        'object': () => action.onClick(e, rowData)
    }
    e.stopPropagation();
    actionType[typeof action]();
}

const actionType = {
    'function': (action, i, rowData, classes) => {
        return  <button type="button"
                        key={i}
                        className={clsx('btn', action(rowData).buttonClass, action(rowData).hidden === true ? classes.hidden : '')} 
                        onClick={(e) => onClick(e, action, rowData)}
                        disabled={action(rowData).disabled}>
                            <i className={action(rowData).icon}></i>
                </button>
    },
    'object': (action, i, rowData, classes) => {
        return  <button type="button"
                        key={i}
                        className={clsx('btn', action.buttonClass, action.hidden === true ? classes.hidden : '')} 
                        onClick={(e) => onClick(e, action, rowData)}
                        disabled={action.disabled}>
                            <i className={action.icon}></i>
                </button>
    }
}

function Actions({ actions, rowData }){
    const classes = useActionStyles();
    return(
        <>
            {actions.map((action, i) => (
                <>
                    {actionType[typeof action]?.(action, i, rowData, classes)}
                    &nbsp;
                </>
            ))}
        </>
    );
}

export default Actions;

