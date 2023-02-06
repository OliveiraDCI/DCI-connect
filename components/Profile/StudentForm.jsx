import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';
import MentorForm from './MentorForm';
import { useUser } from '@auth0/nextjs-auth0/client';
import usersData from '../../utils/usersData';

const StudentForm = () => {
  const { user, isLoading } = useUser();
  const [changesPersonal, setChangesPersonal] = useState(false);
  const [changesCourse, setChangesCourse] = useState(false);

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

  const handlePersonalChange = e => {
    setChangesPersonal(true);

    console.log('input name --> ', e.target.name);
    console.log('input value --> ', e.target.value);

    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleCourseChange = e => {
    setChangesCourse(true);

    console.log('input name --> ', e.target.name);
    console.log('input value --> ', e.target.value);

    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const submitFormPersonal = e => {
    e.preventDefault();

    setChangesPersonal(false);

    console.log('data ', studentData);
    console.log('submitting --> ', process.env.MONGODB_DATA_API_URL);

    fetch(`${process.env.MONGODB_DATA_API_URL}/action/insertOne`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.MONGODB_DATA_API_KEY
      },
      body: JSON.stringify(studentData)
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
  };

  const submitFormCourse = e => {
    e.preventDefault();

    setChangesCourse(false);

    // CRUD operations
  };

  return (
    <>
      <div className="profile-container">
        <div className="personal-details-box">
          <h2 className="personal-details-title">Personal details</h2>
          <Form className="student-form" onSubmit={e => submitFormPersonal(e)}>
            <div>
              <div className="mb-3 w-100 text-center">
                <img alt="user-image" src={studentData.picture} />
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="FirstName"
                    name="firstName"
                    placeholder="First name"
                    type="text"
                    defaultValue={studentData.firstName || ''}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="LastName"
                    name="lastName"
                    placeholder="Last name"
                    type="text"
                    defaultValue={studentData.lastName || ''}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    defaultValue={studentData.email}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="exampleCity"
                    name="city"
                    placeholder="City"
                    type="text"
                    defaultValue={studentData.city}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
            </div>
            {changesPersonal && <Button className="save-changes">Save Changes</Button>}
          </Form>
        </div>

        <div className="dci-course-box">
          <h2 className="dci-course-title">DCI course</h2>
          <Form className="student-form" onSubmit={e => submitFormCourse(e)}>
            <div>
              <FormGroup>
                <Input
                  className="course-selection"
                  id="exampleSelect"
                  name="courseName"
                  type="select"
                  onChange={e => handleCourseChange(e)}>
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
                  name="courseEndDate"
                  placeholder="Expected graduation date"
                  type="text"
                  onFocus={e => {
                    e.target.type = 'date';
                  }}
                  defaultValue={studentData.courseEndDate}
                  onChange={e => handleCourseChange(e)}
                />
              </FormGroup>
            </div>

            {changesCourse && <Button className="save-changes">Save Changes</Button>}
          </Form>
        </div>
        <MentorForm />
      </div>
    </>
  );
};

export default StudentForm;
