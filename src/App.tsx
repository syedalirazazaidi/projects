import React from 'react';
import './App.css';
import Main from './components/main'
import img from './images/watx.jpg'
function App() {
  return (
    <div style={{backgroundImage:`url(${img})`,
    backgroundSize:'cover',
    backgroundPosition:'center center',
    minHeight:'100vh',
    margin:0
  }}>
      <h1 style={{fontSize:'4rem',display:'flex',justifyContent:'center',
     alignItems:'center',
     fontWeight:'normal',
     flexWrap:'wrap'}}>Count Down</h1>
     <div >
     <Main/>
     </div>
    </div>
  );
}

export default App;
