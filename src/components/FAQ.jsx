import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("FAQ!")
  );
  return (
    <button
      type="button"
      className="FAQ_question bg-transparent"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function createQuestions(details) {
  return (
    <FAQ key={details.id} question={details.question} answer={details.answer} />
  );
}
function FAQ(props) {
  const showFAQ = useRef();
  const [addShow, setAddShow] = useState(false);
  const [faqIcon, setfaqIcon] = useState(addShow);
  function clickShow() {
    setAddShow((addShow) => !addShow);
    console.log(addShow);
  }
  useEffect(() => {
    setfaqIcon(addShow);
    console.log(addShow);
  }, [addShow]);
  return (
    <Accordion>
      <Card onClick={clickShow}>
        <Card.Header className="FAQ_question_container">
          <CustomToggle eventKey={props.id}>
            <p className="mb-0">{props.question}</p>
            <Icon
              icon={faqIcon ? "ic:round-minus" : "ic:round-add"}
              className="FAQ_collapse_icon"
            />
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.id}>
          <Card.Body className="FAQ_answer_container" ref={showFAQ}>
            <p className="FAQ_answer">{props.answer}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default FAQ;
export { createQuestions };
