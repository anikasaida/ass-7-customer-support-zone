import React, { Suspense, useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Card from './Components/Card/Card';
import TaskStatus from './Components/TaskStatus/TaskStatus';
import ResolvedStatus from './Components/ResolvedStatus/ResolvedStatus';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Correct fetch path
const fetchTicket = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};
const fetchPromise = fetchTicket();

function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  const [ticketCard, setTicketCard] = useState([]);

  const removeTicketCard = (cards) => {
    const filteredCard = ticketCard.filter((card) => card.id !== cards.id);
    setTicketCard(filteredCard);
  };

  const removeTicket = (ticket) => {
    const filteredTicket = taskStatus.filter((tick) => tick.id !== ticket.id);
    setTaskStatus(filteredTicket);
  };

  return (
    <>
      <NavBar />
      <Banner
        progressCount={progressCount}
        resolvedCount={resolvedCount}
      />

      <div className="max-w-[1200px] mx-auto mt-15">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-3/4">
            <h1 className="font-semibold text-xl mb-4">Customer Tickets</h1>
            <Suspense fallback={"Data is loading..."}>
              <Card
                fetchPromise={fetchPromise}
                setProgressCount={setProgressCount}
                progressCount={progressCount}
                taskStatus={taskStatus}
                setTaskStatus={setTaskStatus}
                removeTicket={removeTicket}
                ticketCard={ticketCard}
                setTicketCard={setTicketCard}
                removeTicketCard={removeTicketCard}
              />
            </Suspense>
          </div>
          <div className="lg:w-1/4">
            <div>
              <h2 className="font-semibold text-xl mb-2">Task Status</h2>
              <TaskStatus
                taskStatus={taskStatus}
                setTaskStatus={setTaskStatus}
                removeTicket={removeTicket}
                progressCount={progressCount}
                setProgressCount={setProgressCount}
                resolvedCount={resolvedCount}
                setResolvedCount={setResolvedCount}
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
                ticketCard={ticketCard}
                setTicketCard={setTicketCard}
                removeTicketCard={removeTicketCard}
              />
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-xl mb-2">Resolved Task</h2>
              <ResolvedStatus
                resolvedTask={resolvedTask}
                setResolvedTask={setResolvedTask}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
