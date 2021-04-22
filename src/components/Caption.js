import React from 'react';
import './css/bootstrap.css';

function Caption(props) {
    function countNotCompleted() {
        return props.items.filter(item => item.isDone === false).length;
    }

    return (
            <h1 className="text-center">ToDo ({countNotCompleted()})</h1>
        );
}

export default Caption;