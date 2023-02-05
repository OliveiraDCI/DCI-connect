import React, { useState } from 'react';
import { FormGroup, Input, Form, Button, Badge } from 'reactstrap';
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
    { value: 'english', label: 'English', color: '#FF8B00', name: 'languages' },
    { value: 'german', label: 'German', color: '#FFC400', name: 'languages' },
    { value: 'other', label: 'Other', color: '#36B37E', name: 'languages' }
  ];
  const animatedComponents = makeAnimated();

  const topicsOptions = [
    { value: 'frontEnd', label: 'Frontend development - JS, React', color: '#FF8B00' },
    { value: 'backEnd', label: 'Backend development - MERN', color: '#FF8B00' },
    { value: 'backEnd', label: 'Backend development - Python', color: '#FF8B00' },
    { value: 'backEnd', label: 'Backend development - Java', color: '#FF8B00' },
    { value: 'aws', label: 'AWS', color: '#FF8B00' },
    { value: 'salesforce', label: 'Salesforce', color: '#36B37E' },
    { value: 'jobCoaching', label: 'Job coaching', color: '#00875A' },
    { value: 'jobSearch', label: 'Job search', color: '#253858' },
    { value: 'interviewPrep', label: 'Interview preparation', color: '#666666' },
    { value: 'freelancing', label: 'Freelancing', color: '#666766' }
  ];

  const employmentOptions = [
    { value: 'employed', label: 'Employed', color: '#FF8B00' },
    { value: 'intern', label: 'Intern', color: '#FF8B00' },
    { value: 'applying', label: 'Applying', color: '#FF8B00' }
  ];

  const handleEmploymentChange = e => {
    setChanges(true);

    console.log('input employment status --> ', e.value);

    setMentorData({
      ...mentorData,
      employment: e.value
    });
  };

  const handleSelectChange = (selectedOption, name) => {
    setChanges(true);

    console.log('input name --> ', name);
    console.log('input value selectedOption --> ', [...selectedOption.map(language => language.value)]);

    setMentorData({
      ...mentorData,
      [name]: [...selectedOption.map(language => language.value)]
    });
  };

  const handleMentorChange = e => {
    setChanges(true);

    console.log('input name --> ', e.target.name);
    console.log('input value --> ', e.target.value);

    setMentorData({
      ...mentorData,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    // CRUD operations
  };

  return (
    <div className="dci-mentor-box">
      <h2 className="dci-mentor-title">Become a mentor</h2>

      <div className="mentor-form">
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
                    placeholder="Describe yourself"
                    id="mentor-description"
                    type="textarea"
                    defaultValue={mentorData.description || ''}
                    name="description"
                    onChange={e => handleMentorChange(e)}
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Select
                    placeholder="Pick the languages you speak..."
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={languageOptions}
                    name="languages"
                    onChange={selectedOption => handleSelectChange(selectedOption, 'languages')}
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Select
                    placeholder="Pick your employment status..."
                    options={employmentOptions}
                    name="employment"
                    onChange={e => handleEmploymentChange(e)}
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Input
                    placeholder="Company"
                    id="mentor-company"
                    type="text"
                    defaultValue={mentorData.company || ''}
                    name="company"
                    onChange={e => handleMentorChange(e)}
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Input
                    id="mentor-position"
                    placeholder="Position"
                    type="text"
                    defaultValue={mentorData.position || ''}
                    name="position"
                    onChange={e => handleMentorChange(e)}
                  />
                </FormGroup>
              </div>

              <div>
                <CreatableSelect
                  placeholder="Pick the topics you can help with or suggest a new one..."
                  isMulti
                  options={topicsOptions}
                  closeMenuOnSelect={false}
                  name="topics"
                  onChange={selectedOption => handleSelectChange(selectedOption, 'topics')}
                />
              </div>

              <br />
              {changes && <Button className="save-changes">Save Changes</Button>}
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default MentorForm;
