import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";
import Sample from "./pages/sample";
import PatientEntryForm from "./pages/PatientEntryForm";
import TreatmentEntryForm from "./pages/TreatmentEntryForm";
import StepperComponent from "./components/Stepper";
const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={StepperComponent} />
    <Route path="/sample" exact component={Sample} />
    <Route path="/add-patient" exact component={PatientEntryForm} />
    <Route path="/treatment-entry" exact component={TreatmentEntryForm} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
