import PropTypes, { 
    arrayOf, 
    object, 
    string, 
    func, 
    shape, 
    element,
    bool, 
    oneOfType, 
    oneOf 
} from "prop-types";

const propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    idName: PropTypes.string.isRequired,
    parentIdName: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired,
    tableClassName: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.oneOf([
            PropTypes.func,
            PropTypes.shape({
                icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]).isRequired,
                onClick: PropTypes.func.isRequired,
                buttonClass: PropTypes.string,
                disabled: PropTypes.bool,
                hidden: PropTypes.bool
            })
        ])
    )
}

export default propTypes;