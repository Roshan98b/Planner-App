import React from "react";
import './Calendar.css'
import { GridView } from "./views/index"
interface Props { }


const Calendar = (props: Props) => {
  return <div className="calendarContainer">
    <GridView key={1}></GridView>
  </div>;
};

export default Calendar;
