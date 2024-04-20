// TreatmentEntryForm.jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@material-ui/core";

const TreatmentEntryForm = () => {
  const [treatmentInfo, setTreatmentInfo] = useState({
    prescription: "",
    duration: "",
    medicines: "",
    restrictions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTreatmentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save treatmentInfo to localStorage
    saveTreatmentInfo(treatmentInfo);
    // Reset form after submission
    setTreatmentInfo({
      prescription: "",
      duration: "",
      medicines: "",
      restrictions: "",
    });
  };

  const saveTreatmentInfo = (treatmentInfo) => {
    // Retrieve existing treatment data from localStorage
    const existingTreatments =
      JSON.parse(localStorage.getItem("treatments")) || [];
    // Add new treatment info to existing data
    const updatedTreatments = [...existingTreatments, treatmentInfo];
    // Save updated data back to localStorage
    localStorage.setItem("treatments", JSON.stringify(updatedTreatments));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Treatment Entry Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Input fields for treatment details */}
        <TextField
          label="Prescription"
          name="prescription"
          value={treatmentInfo.prescription}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Duration (in days)"
          name="duration"
          value={treatmentInfo.duration}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Medicines"
          name="medicines"
          value={treatmentInfo.medicines}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Dietary Restrictions"
          name="restrictions"
          value={treatmentInfo.restrictions}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          style={{ marginTop: "1rem" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Save Treatment Info
        </Button>
      </form>
    </Container>
  );
};

export default TreatmentEntryForm;
