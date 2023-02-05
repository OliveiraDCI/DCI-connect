import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {
  CardGroup,
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
  ListGroupItem
} from 'reactstrap';
import usersData from '../../utils/usersData';

const Mentors = ({ user }) => {
  console.log('hello from mentors');
  console.log('usersData --> ', usersData);
  console.log('user --> ', user);

  return (
    <>
      <div className="cards-group">
        {usersData &&
          usersData.map(mentor => {
            return (
              <Card>
                <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    {mentor.firstName + ' ' + mentor.lastName}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
                    {mentor.city} {mentor.position && ' - ' + mentor.position}
                  </CardSubtitle>
                  <ListGroup flush>
                    <ListGroupItem>
                      <p>About me:</p>
                      {mentor.description}
                    </ListGroupItem>

                    <ListGroupItem>
                      <p>Languages:</p>
                      {mentor.languages.map(language => (
                        <Badge color="info" className="p-2">
                          {' ' + language + ' '}
                        </Badge>
                      ))}
                    </ListGroupItem>
                    <ListGroupItem>
                      {' '}
                      <p>Topics:</p>
                      {mentor.topics.map(topic => (
                        <Badge color="info" className="p-2">
                          {' ' + topic + ' '}{' '}
                        </Badge>
                      ))}
                    </ListGroupItem>
                    <ListGroupItem>
                      <div className="w-100 d-flex justify-content-between">
                        <Badge color="success" className="p-2 ">
                          Email me
                        </Badge>
                        <FormGroup check inline>
                          <Input type="checkbox" />
                          <Label check>Like</Label>
                        </FormGroup>
                      </div>
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
