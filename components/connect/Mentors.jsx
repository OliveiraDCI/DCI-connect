import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Badge, ListGroup, ListGroupItem, Button } from "reactstrap";
import { MdLocationOn } from "react-icons/md";

const Mentors = ({ mentors }) => {
  console.log("hello from mentors");
  console.log("mentors from component --> ", mentors);
  return (
    <>
      <div className="cards-group">
        {mentors &&
          mentors.map((mentor, index) => {
            return (
              <Card key={index}>
                <CardBody>
                  <CardTitle tag="h4" className="text-center mt-2 mb-3">
                    {mentor?.firstName + " " + mentor?.lastName}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted text-center mb-3" tag="h6">
                    {mentor.position && mentor.position + " @ " + mentor?.company + " - "} <MdLocationOn />{" "}
                    {mentor?.city}
                  </CardSubtitle>
                  <ListGroup flush>
                    <ListGroupItem>
                      <p>ABOUT ME</p>
                      {mentor?.description}
                    </ListGroupItem>
                    <ListGroupItem>
                      <p>LANGUAGES</p>
                      {mentor?.languages?.map((language, index) => (
                        <Badge className="language-badge" key={index}>
                          {language && language}
                        </Badge>
                      ))}
                    </ListGroupItem>
                    <ListGroupItem>
                      <p>TOPICS</p>
                      {mentor?.topics?.map((topic, index) => (
                        <Badge className="topic-badge" key={index}>
                          {topic && topic}{" "}
                        </Badge>
                      ))}
                    </ListGroupItem>
                    <ListGroupItem>
                      <a href="mailto:email@email.de?subject=Howdy mentor!">
                        <Button className="email-button mt-2">EMAIL ME</Button>
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
