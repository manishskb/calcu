import React from 'react';
import ReactDOM from 'react-dom';

function add(a,b) {
    let add = a +b;
    return add;
}

function sub(a,b) {
    let sub = a-b;
    return sub;
}

function mult(a,b) {
    let mult = a * b;
    return mult;
}

function div(a,b) {
    let div = a / b;
    div = div.toFixed(2);
    return div;
}

ReactDOM.render(
    <>
        <ol>
            <li>{add(40,4)}</li>
            <li>{sub(40,4)}</li>
            <li>{mult(40,4)}</li>
            <li>{div(40,3)}</li>
        </ol>
    </>,document.getElementById('root')
);