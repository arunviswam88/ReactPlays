import  React  from 'react';
import  ReactDOM  from 'react-dom/client';

header = React.createElement("h1",{id:"header", abc:"xyz", style:{color:"red"}},"Hello from React");
dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(header);