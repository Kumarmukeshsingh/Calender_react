import React from 'react'
import { createContext } from 'react';

const GlobalContext = createContext({
   monthIndex: 0,
   setMonthIndex: (index) => { },
   smallCalenderMonth: 0,
   setSmallCalenderMonth: (index) => { },
   daySelected: null,
   setDaySelected: (day) => { },
   showEventModel: false,
   setShowEventModel: () => { },
   dispatchCalEvent: ({ type, payload }) => { },
   saveEvents: [],
   selectedEvent: null,
   setSelectedEvent: () => { },
   labels: [],
   setLabels: () => { },
   updatedLabel: () => { },
   filteredEvents: [],

})
export default GlobalContext;
