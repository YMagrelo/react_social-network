/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { createField, Input } from '../../Common/FormsControl/Input';
import { Textarea } from '../../Common/FormsControl/Textarea';


const ProfileDataForm = ({ handleSubmit }) => (
  <form className="profileDataForm" onSubmit={handleSubmit}>
    <button
      type="submit"
      className="button is-small"
    >
      Save
    </button>
    <div>
      <b>Full name</b>
      :
      {' '}
      {createField('Full name', 'fullName', [], Input)}
    </div>
    <div>
      <b>Looking for a job: </b>
      <div>
        <Field
          type="checkbox"
          component="input"
          name="lookingForAJob"
        />
      </div>
    </div>
    <div>
      <b>My professional skills: </b>
      {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
    </div>
    <div>
      <b>About me: </b>
      {createField('About me', 'aboutMe', [], Textarea)}
    </div>
    <div>
      <b>Contacts: </b>
      {' '}
      {/* {Object.keys(profile.contacts)
          .map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))} */}
    </div>
  </form>
);
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;
