import { 
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
    list: arrayOf(object).isRequired,
    idName: string.isRequired,
    parentIdName: string.isRequired,
    label: oneOfType([
        string,
        func
    ]).isRequired,
    tableClassName: string,
    actions: arrayOf(
        oneOf([
            func,
            shape({
                icon: oneOfType([string, element, func]).isRequired,
                onClick: func.isRequired,
                disabled: bool,
                hidden: bool
            })
        ])
    )
}

export default propTypes;