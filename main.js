fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
  .then(response => response.json())
  .then(data => {
    // manipulate data as needed
  });


import React, { useState } from "react";
import api from "./api";
import React from "react";
import ReactDOM from "react-dom";
import ReservationForm from "./ReservationForm";

ReactDOM.render(<ReservationForm />, document.getElementById("root"));

function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/reservations", {
        name,
        date,
        time,
        guests,
        occasion,
      });
      console.log(response.data);
      alert("Reservation submitted successfully!");
    } catch (error) {
      console.log(error);
      alert("There was an error submitting your reservation.");
    }
  };

  return (
    <div className="App">
      <h1>Little Lemon Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          required
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />

        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          required
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />

        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          required
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date night">Date Night</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
