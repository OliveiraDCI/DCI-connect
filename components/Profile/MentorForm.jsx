import React, { useState } from 'react';
import { FormGroup, Input, Label, Form, Button, Badge } from 'reactstrap';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
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

  const topicsOptions = [
    { value: 'frontEnd', label: 'Frontend development - JS, React', color: '#FF8B00' },
    { value: 'backEnd', label: 'Backend development - MERN', color: '#FF8B00' },
    { value: 'backEnd', label: 'Backend development - Python', color: '#FF8B00' },
    { value: 'backEnd', label: 'Backend development - Java', color: '#FF8B00' },
    { value: 'aws', label: 'AWS', color: '#FF8B00' },
    { value: 'salesforce', label: 'Salesforce', color: '#36B37E' },
    { value: 'jobCoaching', label: 'Job Coaching', color: '#00875A' },
    { value: 'jobSearch', label: 'Job search', color: '#253858' },
    { value: 'interviewPrep', label: 'Interview preparation', color: '#666666' },
    { value: 'freelancing', label: 'Freelancing', color: '#666766' }
  ];

  const handleMentorChange = () => {
    setChanges(true);
  };

  const submitForm = e => {
    console.log('submiting new values MentorForm e.target.value --> ', e.target.value);
    // update database with new updated values
  };

  return (
    <div className="dci-mentor-box">
      <h2 className="dci-mentor-title">Become a mentor</h2>

      <div className="">
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta atque id dicta veniam commodi dolor sint ad!
          Voluptate, amet sint.
        </p>
        <div className="d-flex justify-content-between w-100">
          <Button
            color="primary"
            outline
            onClick={() => {
              setRSelected(prevState => !prevState);
            }}>
            Become a mentor
          </Button>
          <div>
            <Badge className="px-4 py-1" color="success" pill>
              student likes: {mentorData.likes.length || '0'}
            </Badge>
          </div>
        </div>
        {rSelected && (
          <Form className="form py-4" onSubmit={e => submitForm(e)}>
            <div>
              <div>
                <FormGroup>
                  <Input
                    id="mentor-description"
                    name="mentor-description"
                    placeholder="Describe yourself"
                    type="textarea"
                    defaultValue={mentorData.description || ''}
                    onChange={e => handleMentorChange(e)}
                  />
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
                    onChange={e => handleMentorChange(e)}
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
                    onChange={e => handleMentorChange(e)}>
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
                    defaultValue={mentorData.company || ''}
                    onChange={e => handleMentorChange(e)}
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
                    defaultValue={mentorData.position || ''}
                    onChange={e => handleMentorChange(e)}
                  />
                </FormGroup>
              </div>
              <div className="d-flex w-100 justify-content-around">
                <div>
                  <FormGroup check>
                    {mentorData.topics.includes('JavaScript') ? (
                      <Input type="checkbox" checked onChange={e => handleMentorChange(e)} />
                    ) : (
                      <Input type="checkbox" onChange={e => handleMentorChange(e)} />
                    )}
                    <Label check>JavaScript</Label>
                  </FormGroup>
                </div>

                <div>
                  <FormGroup check>
                    {mentorData.topics.includes('Back-End') ? (
                      <Input type="checkbox" checked onChange={e => handleMentorChange(e)} />
                    ) : (
                      <Input type="checkbox" onChange={e => handleMentorChange(e)} />
                    )}
                    <Label check>Back-End</Label>
                  </FormGroup>
                </div>

                <div>
                  <FormGroup check>
                    {mentorData.topics.includes('Others') ? (
                      <Input type="checkbox" checked onChange={e => handleMentorChange(e)} />
                    ) : (
                      <Input type="checkbox" onChange={e => handleMentorChange(e)} />
                    )}
                    <Label check>Others</Label>
                  </FormGroup>
                </div>
              </div>
              <CreatableSelect
                isMulti
                options={topicsOptions}
                placeholder="Select the topics you can help with or suggest a new one..."
              />
              ;{changes && <Button>Save Changes</Button>}
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default MentorForm;
