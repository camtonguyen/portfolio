import React, { Component, Fragment } from "react";
import { FormGroup, Label, Button } from 'reactstrap';
import DatePicker from "react-datepicker";
import moment from "moment";

export default class PortDate extends Component {

  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? new Date(props.initialDate) : new Date();

    this.state = {
      dateValue
    };
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange = date => {
    this.setState({
      dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  };

  render() {
    const { label, field, form: { touched, errors } } = this.props;
    const { dateValue } = this.state;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div>
            <DatePicker
              className="form-control"
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={new Date()}
              dropdownMode="select"
            />
          {touched[field.name] &&
          errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
      </FormGroup>
    );
  }
}



