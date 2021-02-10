import React from "react";
import "../assets/css/footer.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


class LeftFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler = (e) => {
    this.setState({ ...this, [e.target.id]: e.target.value });
    console.log(this.state);
  };

  onSubmitHandler = async (e) => {
      console.log("hi"); 
    e.preventDefault();
    e.stopPropagation();
    const { name, email, subject, message } = this.state;

    console.log(name);
     await axios
      .post(
        `${process.env.GATSBY_API_URL}/emailUMLL`,
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
          endEmail: "unimelbloveletters@gmail.com",
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => console.log(response));
  };

  render() {
    return (
        <div className="footer-form">
          <div className="heading">CONTACT US</div>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={this.onChangeHandler}
                id="name"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={this.onChangeHandler}
                id="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                onChange={this.onChangeHandler}
                id="subject"
                placeholder="Enter subject"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                onChange={this.onChangeHandler}
                id="message"
                placeholder="Enter message"
              />
            </Form.Group>
            <Button
              variant="info"
              onClick={(e) => this.onSubmitHandler(e)}
              type="button"
            >
              Submit
            </Button>
          </Form>
        </div>
    );
  }
}


export default LeftFooter;
