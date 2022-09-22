import React, { useState } from'react';
import Accordian from './Accordian';
import { Questions } from './api';
import './App.css';

function App() {

  const [select, setselect] = useState(null);

  const selectaccordian = (i) => {

    if(select == i) {
      setselect(null);
    } else {
      setselect(i);
    }

  }

  console.log(select);

  return (
    <section class='accordian_section'>
      {
        Questions.map((que, id) => (
          <Accordian que={que} id={id} selectaccordian={selectaccordian} select={select}/>
        ))
      }
    </section>
  );
}

export default App;
