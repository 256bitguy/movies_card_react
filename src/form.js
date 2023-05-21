import React, { useState ,useEffect} from 'react';

const FormComponent=({named})=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save form data to local storage
    const formData = {
      name,
      email,
    };

    // Convert the form data to a JSON string
    const formDataJson = JSON.stringify(formData);

    // Save the JSON string to local storage
    localStorage.setItem('formData', formDataJson);

    // Reset form fields
    setName('');
    setEmail('');
  };
  useEffect(() => {
    // Retrieve the form data from local storage
    const formDataJson = localStorage.getItem('formData');

    if (formDataJson) {
      // Convert the JSON string back to an object
      const formDataObj = JSON.parse(formDataJson);
      setFormData(formDataObj);
    }
  }, []);

 const display=()=>{
  alert(`${formData.name} you have successfully booked the ticket`);
 }

   
  return (
    <form onSubmit={handleSubmit}>
      <h1>{named}</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit" onSubmit={display}>Submit</button>
    </form>
  );
}

export default FormComponent;
