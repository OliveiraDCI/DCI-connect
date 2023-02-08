import React from "react";
import { Row, Col } from "reactstrap";
import Image from "next/image";
import contentData from "../utils/contentData";

const Content = () => (
  <div className="next-steps my-5 p-0" data-testid="content">
    <h2 className="my-1 text-center" data-testid="content-title">
      How can we help you?
    </h2>
    <Row className="d-flex justify-content-between w-100 mx-auto" data-testid="content-items">
      {contentData.map((col, i) => (
        <Col key={i} md={5} className="m-0">
          <h6 className="m-0">
            <div className="team-image">
              <Image src={col.image} alt="team" width={col.width} height={180} />
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
