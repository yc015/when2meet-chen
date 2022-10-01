// Import style sheet from App.css
import './App.css';
// Import React
import React from 'react';
// Import ScheduleSelector component
import ScheduleSelector from 'react-schedule-selector'

// The App class
class App extends React.Component {
  // State of the schedule selector which stores a list of dates that user selects as available
  state = { schedule: [] }

  // changeHandler for "your availability" scheduler selector
  handleChange = newSchedule => {
    // Update the new schedule to the schedule state after user make some selection
    this.setState({ schedule: newSchedule })
  }

  // Null changeHandler for "Group availability" scheduler selector
  nullHandleChange = newSchedule => {
    // Disable user from editing group's availability
    this.setState()
  }

  render() {
    return (
      // Hold everything in a main container
      <div className='main-container'>
        <h1>When2Meet</h1> <br></br>
        Schedule your Meeting with the team <br></br>
        Toggle a time slot box or drag a rectangle region of boxes to switch their availability status. <br></br>
        The availability that you entered will be immediately reflected on the right group's availability panel.
        {/* Container for the schedule selector */}
        <div className='container'>
          <div className='scheduler-div'>
            {/* Container for your availability selector component */}
            <div className='scheduler-your'>
              <h>Your Availability</h>
              {/* Color legend for availability */}
              <div className='legend-container'>
                Available <div className='avail-box'></div>
                Unavailable <div className='unavail-box'></div>
              </div>
              
              {/* Your availability schedule selector */}
              <ScheduleSelector
                // Link the displayed selection with schedule array
                selection={this.state.schedule}
                // The first date show on the availability heatmap
                startDate={new Date("Wed Sep 28 2022")}
                // Date display format
                dateFormat={'M/D ddd'}
                // How many days to display on the heatmap
                numDays={5}
                // The starting hour of the schedule selector 9 am
                minTime={9}
                // The ending hour of the schedule selector 5 pm
                maxTime={17}
                // Divide each hour slot into two chunks
                hourlyChunks={2}
                // Time display format
                timeFormat={'h:mm a'}
                // What to invoke when the selector is changed
                onChange={this.handleChange}
                // Color when user hovering over the selector
                hoveredColor={'rgba(0, 217, 0, 0.25)'}
                // Color when a time slot is not selected
                unselectedColor={'rgba(200, 0, 0, 0.25)'}
                // Color when a time slot is selected
                selectedColor={'rgba(55, 200, 60, 0.90)'}
              />
            </div>
          </div>
          <div className='scheduler-div'></div>
          
          <div className='scheduler-div'>
            {/* Container for th group availability selector component */}
            {/* Since the schedule selector only allows two coloring state of each time slot */}
            {/* To have the gradient colored availability heatmap, I overlay multiple 
            partially transparent selector component */}
            <div className='scheduler-group'>
              {/* The first group availability schedule selector that represents the availability of one pollee */}
              <h>Group's Availability</h>
              <div className='legend-container'>
                {/* Gradient colored Availability legend */}
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
                // Hardcoded availability 
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
                // Disable the user editing
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.05)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            
            <div className='scheduler-group'>
              {/* The second group availability schedule selector that represents the availability of one pollee */}
              <h>Group's Availability</h>
              <div className='legend-container'>
                {/* Gradient colored Availability legend */}
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
                // Hardcoded availability 
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
                // Disable the user editing
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            <div className='scheduler-group'>
              {/* The third group availability schedule selector that represents the availability of one pollee */}
              <h>Group's Availability</h>
              <div className='legend-container'>
                {/* Gradient colored Availability legend */}
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
                // Hardcoded availability 
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
                // Disable the user editing
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            <div className='scheduler-group'>
              {/* The fourth group availability schedule selector that represents the availability of one pollee */}
              <h>Group's Availability</h>
              <div className='legend-container'>
                {/* Gradient colored Availability legend */}
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
                // Hardcoded availability 
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
                // Disable the user editing
                onChange={this.nullHandleChange}
                hoveredColor={'rgba(0, 0, 0, 0.0)'}
                unselectedColor={'rgba(0, 0, 0, 0.0)'}
                selectedColor={'rgba(55, 200, 60, 0.2)'}
              />
            </div>
            <div className='scheduler-group'>
              {/* The fifth group availability schedule selector that represents your availability */}
              <h>Group's Availability</h>
              <div className='legend-container'>
                {/* Gradient colored Availability legend */}
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
                // Display the user's selection 
                selection={this.state.schedule}
                startDate={new Date("Wed Sep 28 2022")}
                dateFormat={'M/D ddd'}
                numDays={5}
                minTime={9}
                maxTime={17}
                hourlyChunks={2}
                timeFormat={'h:mm a'}
                // Disable the user editing
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
