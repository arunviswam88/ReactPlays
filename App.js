import  React  from 'react';
import  ReactDOM  from 'react-dom/client';

heading = (<h1>Hello from React element</h1>);

FunctionComponent = ()=> (
    <><h1>This is my first function component</h1>
    <span>{heading}</span></>
    
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FunctionComponent/>);