import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';

const MentorForm = () => {
  const [rSelected, setRSelected] = useState(false);

  return (
    <div className="mentor-box">
      <h2 className="mentor-title">Become a mentor</h2>

      <div className="">
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta atque id dicta veniam commodi dolor sint ad!
          Voluptate, amet sint.
        </p>
        <Button
          color="primary"
          outline
          onClick={() => {
            setRSelected(prevState => !prevState);
          }}>
          Become a mentor
        </Button>

        {rSelected && (
          <Form>
            <div>
              <div>
                <FormGroup>
                  <Label for="textarea" hidden />
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder="Please tell us about yourself.."
                    required
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input className="course-selection" id="exampleSelect" name="select" type="select">
                    <option selected="true" disabled="disabled">
                      Graduated course
                    </option>
                    <hr />

                    <option>
                      {' '}
                      <input type="checkbox" value="Web Development" />
                    </option>
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
                  <Input type="checkbox" /> <Label check>Check me out</Label>
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
        )}
      </div>
    </div>
  );
};

export default MentorForm;
