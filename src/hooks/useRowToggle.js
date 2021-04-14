import React, { useState } from 'react';

const BS_ICON = {
    close: 'bi bi-caret-right-fill',
    open: 'bi bi-caret-down-fill'
}

function useRowToggle(defaultIsOpen){
    const [isOpen, setIsOpen] = useState(defaultIsOpen);
    const [icon, setIcon] = useState(defaultIsOpen ? BS_ICON.open : BS_ICON.close);

    function toggleRow(){
        setIsOpen((prevState) => {
            setIcon(prevState ? BS_ICON.close : BS_ICON.open);
            return !isOpen;
        });
    }

    return {
        isOpen,
        toggleRow,
        icon
    }
}

export default useRowToggle;