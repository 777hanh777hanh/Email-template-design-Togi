/**
Custom hook to debounce a value.
@param {any} value - The value to debounce.
@param {number} duration - The debounce duration in milliseconds. Default is 500ms.
@returns {any} - The debounced value.
*/

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, duration = 500) {
    const [debounceValue, setDebounceValue] = useState(value);

    // Set up a timer to update the debounceValue after the specified duration
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, duration);

        // Clear the timer if the value or duration changes before the timer is triggered
        return () => {
            clearTimeout(timer);
        };
    }, [value, duration]);
    return debounceValue;
}

// Prop types for the useDebounce hook
useDebounce.propTypes = {
    // The value to be debounced
    value: PropTypes.any,
    // The debounce duration in milliseconds
    duration: PropTypes.number,
};

export default useDebounce;
