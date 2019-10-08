import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditClient from '../views/invoice/editInvoice/editClient';
import EditProducts from '../views/invoice/editInvoice/editProducts';
import Confirm from '../views/invoice/addInvoice/confirm';
import Display from '../views/invoice/display';

const useStyles = makeStyles(theme => ({

  root: {
    width: '90%',
  },

  backButton: {
    marginRight: theme.spacing(1),
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

}));

function getSteps() {

  return ['Cliente', 'Artículos', 'Confirmación', 'Visualización'];

}

function getStepContent(stepIndex) {

  switch (stepIndex) {
    case 0:
      return <EditClient />;
    case 1:
      return <EditProducts />;
    case 2:
      return <Confirm />;
    case 3:
      return <Display />;
    default:
      return 'Algo ha fallado';
  }

}

export default function HorizontalLabelPositionBelowStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (

    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Añadir otra Factura</Typography>
            <Button onClick={handleReset}>Volver a Añadir</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                outline color="secondary"
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Confirmar' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}