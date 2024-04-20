// StepperComponent.jsx
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
} from "@mui/material";
import PatientEntryForm from "../pages/PatientEntryForm";
import TreatmentEntryForm from "../pages/TreatmentEntryForm";
// import PatientEntryForm from "..pages/PatientEntryForm"; // Assuming this is the component for Module 1
// import TreatmentEntryForm from "../pages/TreatmentEntryForm"; // Assuming this is the component for Module 2

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PatientEntryForm />;
      case 1:
        return <TreatmentEntryForm />;
      default:
        return "Unknown step";
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Stepper Component
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Patient Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Treatment Details</StepLabel>
        </Step>
      </Stepper>
      <div>
        {activeStep === 2 ? (
          <Typography variant="h6">All steps completed</Typography>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div style={{ marginTop: "1rem" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                color="primary"
                style={{ marginLeft: "1rem" }}
              >
                {activeStep === 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default StepperComponent;
