import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "./ContactForm.css";
import "./Button.css";

const ContactForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.formName.value,
      email: e.target.formEmail.value,
      number: phoneNumber,
      message: e.target.formMessage.value,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-mailer-lime.vercel.app/api/contact",
        {
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Message sent successfully!");
        onClose();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneInputStyle = {
    height: "40px",
    width: "100%",
    fontSize: "1rem",
    borderRadius: "0.375rem",
    border: "1px solid #ced4da",
    fontFamily: '"Montserrat", sans-serif',
    color: "Black",
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header className="form-head d-flex flex-column text-center">
        <button type="button" className="btn-close" onClick={onClose}></button>
        <h1>Let's work together</h1>
        <lead>
          I would like to hear from you and see what we can do together
        </lead>
      </Modal.Header>
      <Modal.Body className="form-body">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label className="label">Full Name</Form.Label>
            <Form.Control
              type="text"
              name="formName"
              placeholder="Enter your full name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="label">Email Address</Form.Label>
            <Form.Control
              type="email"
              name="formEmail"
              placeholder="Enter your email address"
              required
            />
          </Form.Group>

          <Form.Group controlId="formNumber" className="mb-3">
            <Form.Label className="label">Phone Number</Form.Label>
            <PhoneInput
              international
              country={"ph"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Enter your phone number"
              required
              inputStyle={phoneInputStyle}
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label className="label">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="formMessage"
              placeholder="Enter your message"
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button
              className="send-message"
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
