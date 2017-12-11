import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. Should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// take this component's generated html and put in on the page
ReactDOM.render(<App/>, document.querySelector('.container'));