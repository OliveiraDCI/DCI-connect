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
  Label
} from 'reactstrap';
import usersData from '../../utils/usersData';

const Mentors = ({ user }) => {
  console.log('hello from mentors');
  console.log('usersData --> ', usersData);
  console.log('user --> ', user);

  return (
    <>
      <CardGroup>
        {usersData &&
          usersData.map(mentor => {
            return (
              <Card>
                <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">{mentor.firstName + ' ' + mentor.lastName}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {mentor.city} {mentor.position && ' - ' + mentor.position}
                  </CardSubtitle>
                  <CardText>{mentor.description}</CardText>
                  <div className="w-100 d-flex justify-content-between">
                    <Badge color="info" className="p-2 ">
                      email me
                    </Badge>
                    <FormGroup check inline>
                      <Input type="checkbox" />
                      <Label check>Like</Label>
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
            );
          })}
      </CardGroup>
    </>
  );
};

export default Mentors;
