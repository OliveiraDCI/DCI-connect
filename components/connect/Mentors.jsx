import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import usersData from "../../utils/usersData";
import { MdLocationOn } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

const Mentors = ({ user }) => {
  console.log("hello from mentors");
  console.log("usersData --> ", usersData);
  console.log("user --> ", user);

  return (
    <>
      <div className="cards-group">
        {usersData &&
          usersData.map((mentor, index) => {
            return (
              <Card key={index}>
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    {mentor.firstName + " " + mentor.lastName}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
                    <MdLocationOn /> {mentor.city} {mentor.position && " - " + mentor.position + " @ " + mentor.company}
                  </CardSubtitle>
                  <ListGroup flush>
                    <ListGroupItem>
                      <p>ABOUT ME</p>
                      {mentor.description}
                    </ListGroupItem>

                    <ListGroupItem>
                      <p>LANGUAGES</p>
                      {mentor.languages.map((language, index) => (
                        <Badge className="language-badge" key={index}>
                          {language}
                        </Badge>
                      ))}
                    </ListGroupItem>
                    <ListGroupItem>
                      <p>TOPICS</p>
                      {mentor.topics.map((topic, index) => (
                        <Badge className="topic-badge" key={index}>
                          {topic}{" "}
                        </Badge>
                      ))}
                    </ListGroupItem>
                    <ListGroupItem>
                      <a href="mailto:email@email.de?subject=Howdy mentor!" className="w-100 mt-2">
                        <Button className="email-button">EMAIL ME</Button>
                      </a>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Mentors;
