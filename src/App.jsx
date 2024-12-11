import { useContext, useEffect, useState } from "react";

// import "./App.css";
import GlobalContext from "./context/GlobalContext";
import CalendarHeader from "./component/CalenderHeader";
 
import { getMonth } from "./util";
import EventModal from "./component/EventModal";
import Sidebar from "./component/Sidebar";
import Month from "./component/Month";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
