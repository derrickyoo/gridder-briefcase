// EmailForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

import EmailField from "./EmailField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class EmailForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={EmailField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onEmailSubmit)}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary float-right">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.forEach(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  errors.recipients = validateEmails(values.recipients || "");

  return errors;
}

export default reduxForm({
  validate,
  form: "emailForm",
  destroyOnUnmount: false
})(EmailForm);
