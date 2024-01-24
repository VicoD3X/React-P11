import '../../src/App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ title, titleClass, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const buttonClass = isOpen ? 'dropdown-button open' : 'dropdown-button';

    return (
        <div className='dropdown'>
            <button className={buttonClass} onClick={toggleDropdown}>
                <span className={titleClass}>{title}</span>
                <FontAwesomeIcon className='dropdownIcon' icon={isOpen ? faChevronUp : faChevronDown} />
            </button>
            {isOpen && (
                <div className='dropdown-content'>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;


