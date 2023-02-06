import React, { useEffect, useState } from "react";
import { FormGroup, Input, Form, Button } from "reactstrap";
import MentorForm from "./MentorForm";

const StudentForm = ({ user }) => {
  const [changesPersonal, setChangesPersonal] = useState(false);
  const [changesCourse, setChangesCourse] = useState(false);

  const [userData, setUserData] = useState({});

  const [studentData, setStudentData] = useState({
    picture: userData?.picture || user.picture || "",
    email: userData?.email || user.name || "",
    firstName: userData?.firstName || user.nickname || "",
    lastName: userData?.lastName || "",
    city: userData?.city || "",
    courseName: userData?.courseName || "",
    courseEndDate: userData?.courseEndDate || "",
    iLike: userData?.iLike || []
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
        const data = await response.json();
        setUserData(data);
        console.log("userData", userData);
      } catch (error) {
        console.log("Error on data fetching: ", error.message);
      }
    }
    fetchData();
  }, []);

  const handlePersonalChange = e => {
    setChangesPersonal(true);

    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleCourseChange = e => {
    setChangesCourse(true);

    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const submitFormPersonal = async e => {
    e.preventDefault();

    setChangesPersonal(false);

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(response => response.json())
      .then(data => console.log("Success: API response data --> ", data))
      .catch(error => console.error("Error:", error));
  };

  const submitFormCourse = async e => {
    e.preventDefault();

    setChangesCourse(false);

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(response => response.json())
      .then(data => console.log("Success: API response data --> ", data))
      .catch(error => console.error("Error:", error));
  };

  return (
    <>
      <div className="profile-container">
        <div className="personal-details-box">
          <h2 className="personal-details-title">Personal details</h2>
          <Form className="student-form" onSubmit={e => submitFormPersonal(e)}>
            <div>
              <div className="mb-3 w-100 text-center">
                <img alt="user-image" src={studentData.picture} />
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="FirstName"
                    name="firstName"
                    placeholder="First name"
                    type="text"
                    defaultValue={studentData.firstName || ""}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="LastName"
                    name="lastName"
                    placeholder="Last name"
                    type="text"
                    defaultValue={studentData.lastName || ""}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                    defaultValue={studentData.email}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Input
                    id="exampleCity"
                    name="city"
                    placeholder="City"
                    type="text"
                    defaultValue={studentData.city}
                    onChange={e => handlePersonalChange(e)}
                  />
                </FormGroup>
              </div>
            </div>
            {changesPersonal && <Button className="save-changes">Save Changes</Button>}
          </Form>
        </div>

        <div className="dci-course-box">
          <h2 className="dci-course-title">DCI course</h2>
          <Form className="student-form" onSubmit={e => submitFormCourse(e)}>
            <div>
              <FormGroup>
                <Input
                  className="course-selection"
                  id="exampleSelect"
                  name="courseName"
                  type="select"
                  onChange={e => handleCourseChange(e)}>
                  {studentData.courseName ? (
                    <option selected={true} disabled="disabled">
                      {studentData.courseName}
                    </option>
                  ) : (
                    <option selected={true} disabled="disabled">
                      Graduated course
                    </option>
                  )}

                  <option>Web Development</option>
                  <option>Python Backend Programming</option>
                  <option>Java Backend Programming</option>
                  <option>AWS re/Start Program</option>
                  <option>Online Marketing</option>
                  <option>Salesforce Consultant</option>
                  <option>HR Consultant - People management</option>
                  <option>Orientation Course</option>
                  <option>Job Coaching</option>
                </Input>
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Input
                  id="exampleDate"
                  name="courseEndDate"
                  placeholder="Expected graduation date"
                  type="text"
                  onFocus={e => {
                    e.target.type = "date";
                  }}
                  defaultValue={studentData.courseEndDate}
                  onChange={e => handleCourseChange(e)}
                />
              </FormGroup>
            </div>

            {changesCourse && <Button className="save-changes">Save Changes</Button>}
          </Form>
        </div>
        <MentorForm />
      </div>
    </>
  );
};

export default StudentForm;
