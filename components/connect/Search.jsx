import React, { useState } from "react";
import { Input, Label, Form, Button } from "reactstrap";
import Mentors from "./Mentors";

const Search = ({ user }) => {
  const [term, setInput] = useState("");
  const [mentorsSearchResult, setMentorsSearchResult] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();

    if (!term) return console.log("no value entered");

    const response = await fetch(`api/user/${term}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    console.log("Term search results: ", data);
    setMentorsSearchResult(data);
  };
  console.log("Mentors search results: ", mentorsSearchResult);

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
          <Mentors mentors={mentorsSearchResult} />
        </div>
      </div>
    </>
  );
};

export default Search;
