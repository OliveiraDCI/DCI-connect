import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

import contentData from "../utils/contentData";

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <h2 className="my-5 text-center" data-testid="content-title">
      How can we help you?
    </h2>
    <Row className="d-flex justify-content-between" data-testid="content-items">
      {contentData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <div className="team-image">
              <Image src={col.image} alt="team" width={200} height={200} />
            </div>
            <div className="col-title"> {col.title}</div>
          </h6>
          <p>{col.description}</p>
        </Col>
      ))}
    </Row>
  </div>
);

export default Content;
