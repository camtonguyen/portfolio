import React from 'react';
import { Formik, Form, Field} from 'formik';
import { FormGroup, Button, Alert, Col } from 'reactstrap';

import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

import moment from 'moment';

const validateInput = (values) => {
  const errors = {};
  const keyArray = Object.entries(values);
  keyArray.forEach(([key, value]) => {
    if(!values[key] && key !== 'endDate') {
      errors[key] = `Your ${key} is required!`;
    }
  })
  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End date cannot be before start date!';
  }
  return errors;
}

const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
  <Col md="8">
    <Formik
      initialValues={initialValues}
      validate={validateInput}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field type="text" 
                   name="title" 
                   label="Title"
                   component={PortInput}/>

            <Field type="text" 
                   name="company" 
                   label="Company"
                   component={PortInput}/>     

            <Field type="text" 
                   name="location"
                   label="Location" 
                   component={PortInput}/>

            <Field type="text" 
                   name="position"
                   label="Position" 
                   component={PortInput}/>

            <Field type="textarea" 
                   name="description" 
                   label="Description"
                   component={PortInput}/>

            <Field name="startDate" 
                   label="Start Date"
                   initialDate={initialValues.startDate}
                   component={PortDate}/>

            <Field name="endDate" 
                   label="End Date"
                   initialDate={initialValues.endDate}
                   component={PortDate}/>
            {error &&
              <Alert color="danger">
                {error}
              </Alert>
            }
            
          <FormGroup>
            <Button color="success" 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}>
                    Submit
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  </Col>
);

export default PortfolioCreateForm;
