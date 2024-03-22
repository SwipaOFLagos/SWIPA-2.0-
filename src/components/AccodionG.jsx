import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../css/AccordionG.css'

function Accordions({name}) {
  return (
    <div className="">{name}
        <h3>Product Details</h3>
        <Accordion defaultActiveKey="0" alwaysOpen accordion-flush className='border border-0'>
      <Accordion.Item eventKey="0" >
        <div className="ganiyat border-top border-2">
        <Accordion.Header ><p style={{fontSize:'24px', fontWeight:'500'}}>About The Product</p></Accordion.Header>
        <Accordion.Body>
        The Maison Francis Kurkdjian collection is sketched like a fragrance wardrobe, with myriad of facets of emotions. Designed in the tradition of luxury French perfumery, it advocates nevertheless a contemporary vision of the art of creating and wearing perfume. Maison Francis Kurkdjian's unique personality is fostered by the creative power of a man who has a taste for precision. Recognized as one of the world's most celebrated perfumers, Francis Kurkdjian imagined a fragrance territory of a free, sensual and delicate perfectionism
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <div className="ganiyat border-top border-2">
        <Accordion.Header><p style={{fontSize:'24px', fontWeight:'500'}}>Scent Profile</p></Accordion.Header>
        <Accordion.Body>
        Maison Francis Kurkdjian is often described as a warm, rich, and sophisticated fragrance. It typically features notes of amber, vanilla, benzoin, and tonka bean, creating a harmonious blend that exudes elegance and sensuality.
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="2" >
       <div className="ganiyat border-top border-2">
       <Accordion.Header><p style={{fontSize:'24px', fontWeight:'500'}}>Scent Type</p></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus nisi rerum cum aut dolore sequi quod dignissimos suscipit consequuntur recusandae, eius vitae mollitia laborum cupiditate numquam unde. Dolorum, iusto!
        </Accordion.Body>
       </div>
      </Accordion.Item>
      <Accordion.Item eventKey="3" >
        <div className="ganiyat border-top border-2">
        <Accordion.Header><p style={{fontSize:'24px', fontWeight:'500'}}>Suggested For Use</p></Accordion.Header>
        <Accordion.Body>
        For long-lasting fragrance that you can carry throughout the day and to minimize the need for reapplying, focus on your pulse points behind your ears, at the base of your neck and on your wrists as well as warmer areas of the body, such as behind the knees and inside the elbow. These are the best places to apply your fragrance since the scent intensifies by the warmth of your body.
        </Accordion.Body>
        </div>
      </Accordion.Item>
      <Accordion.Item eventKey="4" >
        <div className="ganiyat border-top border-2 border-bottom">
        <Accordion.Header><p style={{fontSize:'24px', fontWeight:'500'}}>Refund Policy</p></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque temporibus in sequi obcaecati voluptas illo at modi maxime nostrum, saepe repellendus. Nisi, repudiandae quos.
        </Accordion.Body>
        </div>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accordions;
