import React, { useState } from 'react';
import { Input, Label, Form, Button } from 'reactstrap';
import Mentors from './Mentors';

const Search = ({ user }) => {
  const [term, setInput] = useState('');

  const handleSearch = e => {
    e.preventDefault();

    if (!term) return console.log('no value entered');

    const response = async () => {
      console.log('fetching... term: ', term);
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
          <Form onSubmit={handleSearch} className="d-flex">
            <Label for="search" hidden />
            <Input
              id="search"
              name="search"
              defaultValue={term}
              placeholder="search any term "
              type="search"
              aria-label="Search"
              onInput={e => setInput(e.target.value)}
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
