
import React from 'react'
import Cell from './cell'
import './gridView.css'

const GridView = () => {

    const rowElemets = []
    for (let i = 0; i < 7; i++) {
        rowElemets.push(<Cell date={String(i)} month="Aug" year="2021" ></Cell>)
    }

    const colElements = []
    for (let i = 0; i < 5; i++) {
        colElements.push(<div className="row">
            {rowElemets}
        </div>)
    }
    return (
        <div className="calendarView">
            <div>
                <div className="weekdays">
                    <div className="weekday">Sunday</div>
                    <div className="weekday">Monday</div>
                    <div className="weekday">Tuesday</div>
                    <div className="weekday">Wednesday</div>
                    <div className="weekday">Thursday</div>
                    <div className="weekday">Friday</div>
                    <div className="weekday">Saturday</div>
                </div>
            </div>
            <div className="col">
                {colElements}
            </div>
        </div>
    )
}

export { GridView }