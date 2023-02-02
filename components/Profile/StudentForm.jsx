import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';

const StudentForm = () => {
  return (
    <>
      <div className="profile-container">
        <div className="personal-details-box">
          <h2 className="personal-details-title">Personal details</h2>
          <Form>
            <div>
              <div>
                <FormGroup>
                  <Label for="firstName" hidden />
                  <Input id="exampleFirstName" name="firstName" placeholder="First name" type="text" />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label for="lastName" hidden />
                  <Input id="exampleLastName" name="lastName" placeholder="Last name" type="text" />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label for="exampleEmail" hidden />
                  <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label for="city" hidden />
                  <Input id="exampleCity" name="city" placeholder="City" type="text" />
                </FormGroup>
              </div>
            </div>
          </Form>
        </div>
        <div className="dci-course-box">
          <h2 className="dci-course-title">DCI course</h2>
          <Form>
            <div>
              <div>
                <FormGroup>
                  <Input className="course-selection" id="exampleSelect" name="select" type="select">
                    <option selected="true" disabled="disabled">
                      Graduated course
                    </option>
                    <hr />
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
                  />
                </FormGroup>
              </div>
            </div>
          </Form>
        </div>
        <div className="mentor-box"></div>
      </div>
    </>
  );
};

export default StudentForm;
