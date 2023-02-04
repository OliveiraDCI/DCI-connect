import React, { useState } from 'react';
import { FormGroup, Input, Label, Form } from 'reactstrap';
import MentorForm from './MentorForm';
import { useUser } from '@auth0/nextjs-auth0/client';
import usersData from '../../utils/usersData';

const StudentForm = () => {
  const { user, isLoading } = useUser();
  const [changes, setChanges] = useState(false);

  const [studentData, setStudentData] = useState({
    firstName: usersData[0].firstName || user.nickname || '',
    lastName: usersData[0].lastName || '',
    picture: usersData[0].picture || user.picture || '',
    email: usersData[0].email || user.name || '',
    city: usersData[0].city || '',
    courseName: usersData[0].courseName || '',
    courseEndDate: usersData[0].courseEndDate || '',
    iLike: usersData[0].iLike || []
  });

  const handleUserChange = () => {
    setChanges(true);
  };

  const submitForm = e => {
    console.log('submiting new values StudentForm e.target.value --> ', e.target.value);
    // update database with new updated values
  };

  return (
    <>
      <div className="profile-container">
        <div className="personal-details-box">
          <h2 className="personal-details-title">Personal details</h2>
          <Form className="form" onSubmit={e => submitForm(e)}>
            <div>
              <div>
                <img alt="user-image" src={studentData.picture} />
              </div>
              <div>
                <FormGroup>
                  <Label for="firstName" hidden />
                  <Input
                    id="FirstName"
                    name="firstName"
                    placeholder="First name"
                    type="text"
                    defaultValue={studentData.firstName || ''}
                    onInput={e => handleUserChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label for="lastName" hidden />
                  <Input
                    id="LastName"
                    name="lastName"
                    placeholder="Last name"
                    type="text"
                    defaultValue={studentData.lastName || ''}
                    onInput={e => handleUserChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label for="exampleEmail" hidden />
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    defaultValue={studentData.email}
                    onInput={e => handleUserChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label for="city" hidden />
                  <Input
                    id="exampleCity"
                    name="city"
                    placeholder="City"
                    type="text"
                    defaultValue={studentData.city}
                    onInput={e => handleUserChange(e)}
                  />
                </FormGroup>
              </div>
            </div>
            {changes ?? <Button>Save Changes</Button>}
          </Form>
        </div>
        <div className="dci-course-box">
          <h2 className="dci-course-title">DCI course</h2>
          <Form>
            <div>
              <div>
                <FormGroup>
                  <Input
                    className="course-selection"
                    id="exampleSelect"
                    name="select"
                    type="select"
                    onInput={e => handleUserChange(e)}>
                    {studentData.courseName ? (
                      <option selected={true} disabled="disabled">
                        {studentData.courseName}
                      </option>
                    ) : (
                      <option selected={true} disabled="disabled">
                        Graduated course
                      </option>
                    )}

                    <option>Web Development</option>
                    <option>Python Backend Programming</option>
                    <option>Java Backend Programming</option>
                    <option>AWS re/Start Program</option>
                    <option>Online Marketing</option>
                    <option>Salesforce Consultant</option>
                    <option>HR Consultant - People management</option>
                    <option>Orientation Course</option>
                    <option>Job Coaching</option>
                  </Input>
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="Expected graduation date"
                    type="text"
                    onFocus={e => {
                      e.target.type = 'date';
                    }}
                    defaultValue={studentData.courseEndDate}
                    onInput={e => handleUserChange(e)}
                  />
                </FormGroup>
              </div>
            </div>
            {changes ?? <Button>Save Changes</Button>}
          </Form>
        </div>

        <MentorForm />
      </div>
    </>
  );
};

export default StudentForm;
