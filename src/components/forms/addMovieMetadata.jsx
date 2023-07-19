import React, { useState } from 'react';

function AddMovieMetadata() {
  const [formData, setFormData] = useState({
    genre: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Movie Metadata:
        <input
          type="text"
          name="movie-bio"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddMovieMetadata;