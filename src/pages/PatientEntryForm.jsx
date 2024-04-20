// PatientEntryForm.jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";

const PatientEntryForm = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    age: "",
    address: "",
    phoneNumber: "",
    problem: "",
    description: "",
    image: "",
    audio: "",
    video: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save patientInfo to localStorage
    savePatientInfo(patientInfo);
    // Reset form after submission
    setPatientInfo({
      name: "",
      age: "",
      address: "",
      phoneNumber: "",
      problem: "",
      description: "",
      image: "",
      audio: "",
      video: "",
    });
  };

  const savePatientInfo = (patientInfo) => {
    // Retrieve existing patient data from localStorage
    const existingPatients = JSON.parse(localStorage.getItem("patients")) || [];
    // Add new patient info to existing data
    const updatedPatients = [...existingPatients, patientInfo];
    // Save updated data back to localStorage
    localStorage.setItem("patients", JSON.stringify(updatedPatients));
  };

  return (
    <Container maxWidth="sm" style={{ color: "white", paddingBottom: "10px" }}>
      <Typography variant="h4" gutterBottom>
        Patient Entry Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={patientInfo.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Age"
          name="age"
          value={patientInfo.age}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Address"
          name="address"
          value={patientInfo.address}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={patientInfo.phoneNumber}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Problem/Issue/Disease"
          name="problem"
          value={patientInfo.problem}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="description"
          value={patientInfo.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: "1rem" }}
        />
        {/* Optional fields */}
        <TextField
          label="Image URL"
          name="image"
          value={patientInfo.image}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Audio URL"
          name="audio"
          value={patientInfo.audio}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Video URL"
          name="video"
          value={patientInfo.video}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Save Patient Info
        </Button>
      </form>
    </Container>
  );
};

export default PatientEntryForm;
