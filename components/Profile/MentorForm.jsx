import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const MentorForm = () => {
  const [rSelected, setRSelected] = useState(false);

  const languageOptions = [
    { value: 'english', label: 'English', color: '#FF8B00' },
    { value: 'german', label: 'German', color: '#FFC400' },
    { value: 'other', label: 'Other', color: '#36B37E' }
  ];
  const animatedComponents = makeAnimated();

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
                  <Input id="exampleText" name="text" type="textarea" placeholder="Tell us about yourself.." required />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={languageOptions}
                    placeholder="Select the languages you speak..."
                  />
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
