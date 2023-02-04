import React, { useState } from 'react';
import { Input, Label, Form, Button } from 'reactstrap';
import Mentors from './Mentors';

const Search = ({ user }) => {
  const [term, setTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();

    if (!term) return console.log('no value entered');

    const response = async () => {
      console.log(term);
      console.log('fetching...');
      // fetch term dynamically via API endpoint /mentors/[term]
    };
    response();
    // const data = response.json();
    // console.log('Term search data --> ', data);
  };

  return (
    <>
      <div className="connect-container">
        <div>
          <Form onSubmit={e => handleSearch(e)} className="d-flex">
            <Label for="search" hidden />
            <Input
              id="search"
              name="search"
              value={term}
              placeholder="search any term "
              type="search"
              aria-label="Search"
              onChange={e => setTerm(e.target.value)}
            />
            <Button color="info">search</Button>
          </Form>
        </div>
        <div>
          <Mentors user={user} />
        </div>
      </div>
    </>
  );
};

export default Search;
