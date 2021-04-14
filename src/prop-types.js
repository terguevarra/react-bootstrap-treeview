import PropTypes from "prop-types";

const propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    idName: PropTypes.string.isRequired,
    parentIdName: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired
}

export default propTypes;