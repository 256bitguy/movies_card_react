import React, { useState } from 'react';
import ShowList from './ShowList';
import ShowSummary from './ShowSummary';
import Formed from './form';
import Modal from 'react-modal'
 

const App = () => {
  


  const [selectedShow, setSelectedShow] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = () => {
    setBookingDetails({
      showName: selectedShow.name,
    });
  };

  const handleBackToShows = () => {
    setSelectedShow(null);
  };

  return (
    <div>
     
      {selectedShow ? (
        <div>
          <button onClick={handleBackToShows}>Back to Shows</button>
          <ShowSummary show={selectedShow} onBookTicket={handleBookTicket} />
        </div>
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}
       
    </div>
  );
};

export default App;
