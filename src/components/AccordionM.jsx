import React,{useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import "../CSS/AccordionM.css";
import { IoSearch } from "react-icons/io5";


const Accord = ({handleCheckboxChange, handleAvailabilityChange}) => {
  
  const [search, setSearch] = useState('')

  const alphabelts = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <>
      <Accordion defaultActiveKey={[""]} alwaysOpen>
        <Accordion.Item eventKey="0" className="accord">
          <Accordion.Header>
            <span className="accord-text">Gender</span>
          </Accordion.Header>
          <Accordion.Body className="accord-gender">
            <label>
              <input
                type="checkbox"
                name="male"
                value="male"
                onChange={(e) => handleCheckboxChange(e, "male", "gender")}
                />
              Male
            </label>
            <label>
              <input
                type="checkbox"
                name="female"
                value="female"
                onChange={(e) => handleCheckboxChange(e, "female", "gender")}
                />
              Female
            </label>
            <label>
              <input
                type="checkbox"
                name="unisex"
                value="unisex"
                onChange={(e) => handleCheckboxChange(e, "unisex", 'gender')}
              />
              Unisex
            </label>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accord">
        <Accordion.Header>
          <span className="accord-text">Brand</span>
        </Accordion.Header>
        <Accordion.Body className="accord-brand">
          {alphabelts.map((alphabelt, i) => {
            return <span key={i}>{alphabelt.toUpperCase()}</span>
          })}
        </Accordion.Body>
        <Accordion.Body className="accord-input">
          <div className="input-body">
          <input type="text" 
                onChange={(e)=> setSearch(e.target.value.toLowerCase().trim()) }
            placeholder='Search' />
            <span><IoSearch /></span>
          </div>
          <div className="brand-list">
          <label>
              <input
                type="checkbox"
                value="Adidas"
                onChange={(e) => handleCheckboxChange(e, "Adidas", "brandType")}
                />
              Adidas
            </label>
             <label>
              <input
                type="checkbox"
                value="Armaf"
                onChange={(e) => handleCheckboxChange(e, "Armaf", "brandType")}
                />
              Armaf
            </label>
            <label>
              <input
                type="checkbox"
                value="Armani"
                onChange={(e) => handleCheckboxChange(e, "Armani", "brandType")}
                />
              Armani
            </label>
            <label>
              <input
                type="checkbox"
                value="Calvin Klein"
                onChange={(e) => handleCheckboxChange(e, "Calvin Klein", "brandType")}
                />
              Calvin Klein
            </label>
            <label>
              <input
                type="checkbox"
                value="Dior"
                onChange={(e) => handleCheckboxChange(e, "Dior", "brandType")}
                />
              Dior
            </label>
            <label>
              <input
                type="checkbox"
                value="Dolce & Gabbana"
                onChange={(e) => handleCheckboxChange(e, "Dolce & Gabbana", "brandType")}
                />
              Dolce & Gabbana
            </label>
            <label>
              <input
                type="checkbox"
                value="Essenza"
                onChange={(e) => handleCheckboxChange(e, "Essenza", "brandType")}
                />
              Essenza
            </label>
            <label>
              <input
                type="checkbox"
                value="Giorgio Armani"
                onChange={(e) => handleCheckboxChange(e, "Giorgio Armani", "brandType")}
                />
              Giorgio Armani
            </label>
            <label>
              <input
                type="checkbox"
                value="Hugo Boss"
                onChange={(e) => handleCheckboxChange(e, "Hugo Boss", "brandType")}
                />
              Hugo Boss
            </label>
            <label>
              <input
                type="checkbox"
                value="Jimmy Choo"
                onChange={(e) => handleCheckboxChange(e, "Jimmy Choo", "brandType")}
                />
              Jimmy Choo
            </label>
            <label>
              <input
                type="checkbox"
                value="Lataffa"
                onChange={(e) => handleCheckboxChange(e, "Lataffa", "brandType")}
                />
              Lataffa
            </label>
            <label>
              <input
                type="checkbox"
                value="Armani"
                onChange={(e) => handleCheckboxChange(e, "Armani", "brandType")}
                />
              Armani
            </label>
            <label>
              <input
                type="checkbox"
                value="Mont Blanc"
                onChange={(e) => handleCheckboxChange(e, "Mont Blanc", "brandType")}
                />
              Mont Blanc
            </label>
            <label>
              <input
                type="checkbox"
                value="Ralph Lauren"
                onChange={(e) => handleCheckboxChange(e, "Ralph Lauren", "brandType")}
                />
              Ralph Lauren
            </label>
            <label>
              <input
                type="checkbox"
                value="Versace"
                onChange={(e) => handleCheckboxChange(e, "Versace", "brandType")}
                />
              Versace
            </label>
            <label>
              <input
                type="checkbox"
                value="Yves"
                onChange={(e) => handleCheckboxChange(e, "Yves", "brandType")}
                />
              Yves Saint Laurent
            </label>
            <label>
              <input
                type="checkbox"
                value="Zaien"
                onChange={(e) => handleCheckboxChange(e, "Zaien", "brandType")}
                />
              Zaien
            </label>
            

          </div>
        </Accordion.Body>


      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accord">
        <Accordion.Header>
          <span className="accord-text">Fragrance Type</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input
              type="checkbox"
              value="Body Spray"
              onChange={(e) => handleCheckboxChange(e, "Body Spray", "fragranceType")}
              />
            Body Spray
          </label>
          <label>
            <input
              type="checkbox"
              value="deodorant"
              onChange={(e) => handleCheckboxChange(e, "Deodorant", "fragranceType")}
              />
            Deodorant
          </label>
          <label>
            <input
              type="checkbox"
              value="Eau De Cologue"
              onChange={(e) => handleCheckboxChange(e, "Eau De Cologue", "fragranceType")}
              />
            Eau De Cologue
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Eau De Parfum", 'fragranceType')}
            />
            Eau De Parfum
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Eau De Toilette", 'fragranceType')}
            />
            Eau De Toilette
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Perfum Oil", 'fragranceType')}
            />
            Perfum Oil
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accord">
        <Accordion.Header>
          <span className="accord-text">Scent Type</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input type="checkbox"      
             onChange={(e) => handleCheckboxChange(e, "Cedar", 'scentType')}
            />
            Cedar
          </label>
          <label>
            <input type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Citrus", 'scentType')}
            />
            Citrus
          </label>
          <label>
            <input type="checkbox" 
            onChange={(e) => handleCheckboxChange(e, "Floral", 'scentType')}
            />
            Floral
          </label>
          <label>
            <input type="checkbox" 
               onChange={(e) => handleCheckboxChange(e, "Fresh", 'scentType')}

            />
            Fresh
          </label>
          <label>
            <input type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Lemon", 'scentType')}

            />
            Lemon
          </label>
          <label>
            <input type="checkbox" 
              onChange={(e) => handleCheckboxChange(e, "Mush.Amber", 'scentType')}
            />
            Mush, Amber
          </label>
          <label>
            <input type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Rose", 'scentType')}
            />
            Rose
          </label>
          <label>
            <input type="checkbox"
              onChange={(e) => handleCheckboxChange(e, "Vanilla", 'scentType')}
            />
            Vanilla
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accord">
        <Accordion.Header>
          <span className="accord-text">Price</span>
        </Accordion.Header>
        <Accordion.Body className="accord-price">
          <label>
            <input type="checkbox" 
            value='Under10K'
            onChange={(e) => handleCheckboxChange(e, 'Under10K', 'price')}
             />
            Under &#x20A6;10,000
          </label>
          <label>
            <input type="checkbox"
            value='10kTo15K'
            onChange={(e) => handleCheckboxChange(e, '10kTo50K', 'price')}
            />
            &#x20A6;10,000 - &#x20A6;50,000
          </label>
          <label>
            <input type="checkbox" 
            value='Over15k'
            onChange={(e) => handleCheckboxChange(e, 'Over50k', 'price')}
            
            />
            &#x20A6;50,000+
          </label>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="accord">
        <Accordion.Header>
          <span className="accord-text">Availability</span>
        </Accordion.Header>
        <Accordion.Body className="accord-availability">
          <ul>
            <li onClick={() => handleAvailabilityChange('true')}>In Stock</li>
            <li onClick={() => handleAvailabilityChange('false')}>Out of Stock</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
        {/* Other filter options go here */}
      </Accordion>
    </>
  );
};

export default Accord;
