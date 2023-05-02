// import Calendar from './components/Calendar.jsx'
// import DateRange from './components/DateRange.jsx'
// import DateRangePicker from './components/DateRangePicker.jsx'
import './App.css'
import React from "react";
import {FormattedMessage} from 'react-intl';


function App() {

  return (
    <div className="App"><header className="App-header">
    <p>
      <FormattedMessage
      id = "app.header"
      defaultMessage="Edit the files and save to reload"
    />
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FormattedMessage
        id = "app.content"
        defaultMessage="Learn React"
      />

    </a>
    <FormattedMessage
      id = "app.channel.plug"
      defaultMessage="Tutorial brought to you by Medium"
    />
  </header>
    </div>
  );
}

export default App
