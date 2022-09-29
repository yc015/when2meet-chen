import './App.css';
import React from 'react';
import ScheduleSelector from 'react-schedule-selector'

class App extends React.Component {
  state = { schedule: [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
    console.log(this.state)
  }

  nullHandleChange = newSchedule => {
    this.setState()
  }

  render() {
    return (
      <div className='main-container'>
        <h1>When2Meet</h1> <br></br>
        Schedule your Meeting with the team
        <div className='container'>
          <div className='scheduler-div'>
            <div className='scheduler-your'>
              <h>Your Availability</h>
              <div className='legend-container'>
                Available <div className='avail-box'></div>
                Unavailable <div className='unavail-box'></div>
              </div>
              
              <ScheduleSelector
                selection={this.state.schedule}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                onChange={this.handleChange}
                hoveredColor={'rgba(0, 217, 0, 0.25)'}
                unselectedColor={'rgba(200, 0, 0, 0.25)'}
                selectedColor={'rgba(55, 200, 60, 0.90)'}
              />
            </div>
          </div>
          <div className='scheduler-div'></div>
          
          <div className='scheduler-div'>
            <div className='scheduler-group'>
              <h>Group's Availability</h>
              <div className='legend-container'>
                Available 0/5 
                <div className='gradient-box-0'></div>
                <div className='gradient-box-1'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div> 
                Available 5/5
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Wed Sep 28 2022 09:00:00"),
                  new Date("Wed Sep 28 2022 09:30:00"),
                  new Date("Wed Sep 28 2022 10:00:00"),
                  new Date("Wed Sep 28 2022 10:30:00"),
                  new Date("Wed Sep 28 2022 11:00:00"),
                  new Date("Wed Sep 28 2022 11:30:00"),
                  new Date("Fri Sep 30 2022 09:00:00"),
                  new Date("Fri Sep 30 2022 09:30:00"),
                  new Date("Fri Sep 30 2022 10:00:00"),
                  new Date("Fri Sep 30 2022 10:30:00"),
                  new Date("Fri Sep 30 2022 11:30:00"),
                  new Date("Fri Sep 30 2022 12:00:00"),
                  new Date("Sun Oct 02 2022 09:00:00"),
                  new Date("Sun Oct 02 2022 09:30:00"),
                  new Date("Sun Oct 02 2022 10:00:00")
                ]}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.05)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            
            <div className='scheduler-group'>
              <h>Group's Availability</h>
              <div className='legend-container'>
                Available 0/5 
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-2'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div> 
                Available 5/5
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Wed Sep 28 2022 09:00:00"),
                  new Date("Wed Sep 28 2022 09:30:00"),
                  new Date("Wed Sep 28 2022 10:00:00"),
                  new Date("Wed Sep 28 2022 10:30:00"),
                  new Date("Fri Sep 30 2022 09:00:00"),
                  new Date("Fri Sep 30 2022 09:30:00"),
                  new Date("Fri Sep 30 2022 10:00:00"),
                  new Date("Fri Sep 30 2022 11:30:00"),
                  new Date("Fri Sep 30 2022 12:00:00"),
                  new Date("Fri Sep 30 2022 14:30:00"),
                  new Date("Fri Sep 30 2022 15:00:00"),
                  new Date("Sun Oct 02 2022 09:00:00"),
                  new Date("Sun Oct 02 2022 09:30:00"),
                  new Date("Sun Oct 02 2022 10:00:00")
                ]}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            <div className='scheduler-group'>
              <h>Group's Availability</h>
              <div className='legend-container'>
                Available 0/5 
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-3'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div> 
                Available 5/5
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Wed Sep 28 2022 09:00:00"),
                  new Date("Wed Sep 28 2022 09:30:00"),
                  new Date("Fri Sep 30 2022 09:00:00"),
                  new Date("Fri Sep 30 2022 09:30:00"),
                  new Date("Fri Sep 30 2022 10:00:00"),
                  new Date("Fri Sep 30 2022 10:30:00"),
                  new Date("Fri Sep 30 2022 11:00:00"),
                  new Date("Fri Sep 30 2022 11:30:00"),
                  new Date("Fri Sep 30 2022 12:00:00"),
                  new Date("Sun Oct 02 2022 09:00:00"),
                  new Date("Sun Oct 02 2022 09:30:00"),
                  new Date("Sun Oct 02 2022 10:00:00")
                ]}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            <div className='scheduler-group'>
              <h>Group's Availability</h>
              <div className='legend-container'>
                Available 0/5 
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-4'></div>
                <div className='gradient-box-null'></div> 
                Available 5/5
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Fri Sep 30 2022 11:30:00"),
                  new Date("Fri Sep 30 2022 12:00:00"),
                  new Date("Sun Oct 02 2022 09:00:00"),
                  new Date("Sun Oct 02 2022 09:30:00"),
                  new Date("Sun Oct 02 2022 10:00:00"),
                  new Date("Fri Sep 30 2022 11:30:00"),
                  new Date("Fri Sep 30 2022 12:00:00"),
                  new Date("Fri Sep 30 2022 12:30:00"),
                  new Date("Sun Oct 02 2022 09:30:00"),
                  new Date("Sun Oct 02 2022 12:00:00"),
                  new Date("Sun Oct 02 2022 12:30:00"),
                  new Date("Sun Oct 02 2022 13:00:00"),
                  new Date("Sun Oct 02 2022 13:30:00"),
                  new Date("Sun Oct 02 2022 14:00:00"),
                  new Date("Sun Oct 02 2022 14:30:00"),
                  new Date("Sun Oct 02 2022 15:00:00"),
                  new Date("Sun Oct 02 2022 15:30:00"),
                ]}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            <div className='scheduler-group'>
              <h>Group's Availability</h>
              <div className='legend-container'>
                Available 0/5 
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-null'></div>
                <div className='gradient-box-5'></div> 
                Available 5/5
              </div>
              <ScheduleSelector
                selection={this.state.schedule}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
