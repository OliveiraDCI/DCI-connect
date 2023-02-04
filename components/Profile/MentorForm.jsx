import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import usersData from '../../utils/usersData';

const MentorForm = () => {
  const [rSelected, setRSelected] = useState(false);
  const [changes, setChanges] = useState(false);

  const [mentorData, setMentorData] = useState({
    description: usersData[0].description || '',
    languages: usersData[0].languages || [],
    employment: usersData[0].employment || '',
    company: usersData[0].company || '',
    position: usersData[0].position || '',
    topics: usersData[0].topics || [],
    likes: usersData[0].likes || []
  });

  const languageOptions = [
    { value: 'english', label: 'English', color: '#FF8B00' },
    { value: 'german', label: 'German', color: '#FFC400' },
    { value: 'other', label: 'Other', color: '#36B37E' }
  ];
  const animatedComponents = makeAnimated();

  const handleMentorChange = () => {
    setChanges(true);
  };

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
          // <Form>
          //   <div>
          //     <div>
          //       <FormGroup>
          //         <Label for="textarea" hidden />
          //         <Input id="exampleText" name="text" type="textarea" placeholder="Tell us about yourself.." required />
          //       </FormGroup>
          //     </div>
          //     <div>
          //       <FormGroup>
          //         <Select
          //           closeMenuOnSelect={false}
          //           components={animatedComponents}
          //           isMulti
          //           options={languageOptions}
          //           placeholder="Select the languages you speak..."
          //         />
          //       </FormGroup>
          //     </div>
          //     <div>
          //       <FormGroup>
          //         <Input type="checkbox" /> <Label check>Check me out</Label>
          //       </FormGroup>
          //     </div>
          //     <div>
          //       <FormGroup>
          //         <Label for="city" hidden />
          //         <Input id="exampleCity" name="city" placeholder="City" type="text" />
          //       </FormGroup>
          //     </div>
          //   </div>
          // </Form>

          // Above, previous state for ref and refactor / merge code

          <div>
            <div>
              <FormGroup>
                <Input
                  id="mentor-description"
                  name="mentor-description"
                  placeholder="Describe yourself"
                  type="textarea"
                  value={mentorData.description || ''}
                  onChange={handleMentorChange}
                />
              </FormGroup>
            </div>

            {/* <div>
              <Form>
                <FormGroup check inline>
                  {mentorData.languages.includes('German') ? (
                    <Input type="checkbox" checked />
                  ) : (
                    <Input type="checkbox" />
                  )}
                  <Label check>German</Label>
                </FormGroup>
                <FormGroup check inline>
                  {mentorData.languages.includes('English') ? (
                    <Input type="checkbox" checked />
                  ) : (
                    <Input type="checkbox" />
                  )}
                  <Label check>English</Label>
                </FormGroup>
                <FormGroup check inline>
                  {mentorData.languages.includes('Other') ? (
                    <Input type="checkbox" checked />
                  ) : (
                    <Input type="checkbox" />
                  )}
                  <Label check>Other</Label>
                </FormGroup>
              </Form>
            </div> */}

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
                <Input
                  className="language-selection w-100 px-2 py-1"
                  id="languageSelect"
                  name="languageSelect"
                  type="select"
                  onInput={handleMentorChange}>
                  {mentorData.employment ? (
                    <option selected={true} disabled="disabled">
                      {mentorData.employment}
                    </option>
                  ) : (
                    <option selected={true} disabled="disabled">
                      Employment status
                    </option>
                  )}

                  <option>Employed</option>
                  <option>Intern</option>
                  <option>Applying</option>
                </Input>
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Input
                  id="mentor-description"
                  name="mentor-description"
                  placeholder="Company"
                  type="text"
                  value={mentorData.company || ''}
                  onChange={handleMentorChange}
                />
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Input
                  id="mentor-description"
                  name="mentor-description"
                  placeholder="Position"
                  type="text"
                  value={mentorData.position || ''}
                  onChange={handleMentorChange}
                />
              </FormGroup>
            </div>

            <div>
              <Form>
                <FormGroup check inline>
                  {mentorData.topics.includes('JavaScript') ? (
                    <Input type="checkbox" checked />
                  ) : (
                    <Input type="checkbox" />
                  )}
                  <Label check>JavaScript</Label>
                </FormGroup>
                <FormGroup check inline>
                  {mentorData.topics.includes('Back-End') ? (
                    <Input type="checkbox" checked />
                  ) : (
                    <Input type="checkbox" />
                  )}
                  <Label check>Back-End</Label>
                </FormGroup>
                <FormGroup check inline>
                  {mentorData.topics.includes('Others') ? <Input type="checkbox" checked /> : <Input type="checkbox" />}
                  <Label check>Others</Label>
                </FormGroup>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorForm;
