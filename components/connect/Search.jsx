import React, { useState } from "react";
import { Input, Label, Form, Button } from "reactstrap";
import Mentors from "./Mentors";

const Search = ({ user }) => {
  const [term, setInput] = useState("");

  const handleSearch = e => {
    e.preventDefault();

    if (!term) return console.log("no value entered");

    const response = async () => {
      console.log("fetching... term: ", term);
      const getMentors = await fetch(`/api/user/${term}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const getMentorsJson = await getMentors.json();

      console.log("getMentorsJson search results --> ", getMentorsJson);
    };
    response();
  };

  return (
    <>
      <div className="connect-container">
        <div>
          <Form onSubmit={handleSearch} className="d-flex" id="search-bar">
            <Label for="search" hidden />
            <Input
              className="search-input"
              id="search"
              name="search"
              defaultValue={term}
              placeholder="search any term "
              type="search"
              aria-label="Search"
              onInput={e => setInput(e.target.value)}
            />
            <Button className="search-button" id="search-button">
              search
            </Button>
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
