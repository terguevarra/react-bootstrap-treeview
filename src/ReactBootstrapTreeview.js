import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';

import Table from './components/Table';

function ReactBootstrapTreeview(props){
    return(
        <Table {...props} />
    );
}

ReactBootstrapTreeview.defaultProps = defaultProps;
ReactBootstrapTreeview.propTypes = propTypes;

export default ReactBootstrapTreeview;