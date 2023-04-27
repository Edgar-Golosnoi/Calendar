import CalendarComp from './components/Calendar.jsx'
import DateRangeComp from './components/DateRange.jsx'
import DateRangePickerComp from './components/DateRangePicker.jsx'

import './App.css'

function App() {
  return (
    <div className="App">

      <h4>Выбрать дату</h4>
      <CalendarComp />

      <h4>Выбрать временной диапазон</h4>
      <DateRangeComp />

      <h4>Временной диапазон</h4>
      <DateRangePickerComp />

    </div>
  );
}

export default App
