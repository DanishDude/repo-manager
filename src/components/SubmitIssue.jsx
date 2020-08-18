import React from 'react'
import { Button } from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let SubmitIssue = () => {
  const { submitIssue } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchSubmitIssue(submitIssue.values));
  };

  return (
    <div className="SumbitIssue">
      <form>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="Issue Title"
        />
        <Field
          name="description"
          component="input"
          type="textarea"
          placeholder="Describe your issue..."
        />
        <Button type="submit">Submit Issue</Button>
      </form>
    </div>
  );
};

SubmitIssue = reduxForm({ form: 'submitIssue' })(SubmitIssue);

export default SubmitIssue;
