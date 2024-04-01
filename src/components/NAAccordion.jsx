import Accordion from 'react-bootstrap/Accordion';
import "../css/NAAccordion.css"
import { Alphabets } from "../components/NAAlphabetsCard"
import CheckedBox1, { CheckedBox2, CheckedBox3, CheckedBox4, CheckedBox5, CheckedBox6 } from './NACheckbox';

function NewAccordion() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body>
          <div className='ac-body'>
            <CheckedBox1 />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body>
          <div className='b-div'>
            <Alphabets />
          </div>

            <div className='mt-3'style={{ maxHeight: "260px", overflowY: 'auto', overflowX: "hidden",width:"14.5rem", scrollbarGutter:"stable"}}>
              <CheckedBox6 />
            </div>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Fragrance Type</Accordion.Header>
        <Accordion.Body>
          <CheckedBox2 />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Scent Type</Accordion.Header>
        <Accordion.Body>
          <CheckedBox3 />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          <CheckedBox4 />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Availability</Accordion.Header>
        <Accordion.Body>
          <CheckedBox5 />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default NewAccordion;