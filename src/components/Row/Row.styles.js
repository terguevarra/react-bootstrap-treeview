import { createUseStyles } from 'react-jss';

const useRowStyles = createUseStyles({
    tdContentStyle: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    marginLeft: {
        marginLeft: props => `${(props.levelNum + 1) - 1}rem`
    },
    label: {
        order: 0
    },
    actions: {
        order: 1
    }
});

export default useRowStyles;