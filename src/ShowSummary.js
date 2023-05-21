import React, { useState,useEffect } from 'react';
import "./ShowSummary.css";
import Formed from './form';
import Modal from "react-modal";
 
 
 

const ShowSummary = ({ show, onBookTicket }) => {
  const { name, summary, image, genres, language, premiered } = show;
      const [val,setVal]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  
const ssss=(e)=>{
  setVal(!val);
   
}
  
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Retrieve form data from localStorage on component mount
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any desired actions with the form data
    console.log(formData);

    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Reset the form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Close the modal
    closeModal();
  };

  return (
     <div>
      {val?<div>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modal"
      >
        <Formed named={name}/>
      </Modal>
      </div>:<div className="show-summary">
      <h1>{name}</h1>
      <div className="show-details">
        <img src={image?.medium} alt={name} />
        <div className="summary-details">
           <p> {summary}</p> 
          <p>Genres: {genres.join(', ')}</p>
          <p>Language: {language}</p>
          <p>Premiered: {premiered}</p>
        </div>
      </div>
      <button className="book-ticket-btn" onClick={handleSubmit && ssss}  >
        Book Ticket
      </button>
      
    </div>}
     </div>
   
  );
};

export default ShowSummary;
