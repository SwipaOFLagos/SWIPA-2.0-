import Form from 'react-bootstrap/Form';
import "../css/NACheckbox.css"
import searchEye from "../assets/images/Vector 2.png";
// src\assets\images\Vector 2.png
function CheckedBox1() {
    return (
        <div className='checked-div'>
            <Form className='ms-2 mt-2'>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Male"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Female"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Unisex"
                        />
                    </div>
                ))}
            </Form>
        </div>

    );
}

export default CheckedBox1;

export function CheckedBox2() {
    return (
        <div className='checked-div2'>
            <Form className='ms-2 mt-2'>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Body Spray"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Deodorant"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Eau De Cologne"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Eau De Perfum"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Eau De Toilette"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Perfum Oil"
                        />
                    </div>
                ))}
            </Form>
        </div>

    );
}

export function CheckedBox3() {
    return (
        <div className='checked-div3'>
            <Form className='ms-2 mt-2'>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Cedar"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Citrus"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Floral"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Lemon"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Mush, Amber"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Rose"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Vanilla"
                        />
                    </div>
                ))}
            </Form>
        </div>

    );
}

export function CheckedBox4() {
    return (
        <div className='checked-div'>
            <Form className='ms-2 mt-2'>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="Under ₦10,000"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="₦10,000 - ₦50,000"
                        />
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label="₦50,000+"
                        />
                    </div>
                ))}
            </Form>
        </div>

    );
}

export function CheckedBox5() {
    return (
        <div className='checked-div5'>
            <button style={{width: "10px", height:"10px", borderRadius: "50%", backgroundColor:"green", border:"none"}} className='ms-2 mt-3'/> <span className='text-success'>In stock</span> <br/>
            <button style={{width: "10px", height:"10px", borderRadius: "50%", backgroundColor:"red", border:"none"}} className='ms-2 mt-2'/> <span className='text-danger'>Out of stock</span>      
        </div>

    );
}

export function CheckedBox6() {
    return (
        <div className='checked-div6'>
            <div className='arrival-search' >
                <div className=' d-flex'>
                <input type='search' placeholder="Search" className='arrival-search-bar'/>
                <div style={{ backgroundColor: "black", width:"2rem", height: "35px", borderTopRightRadius:"3px", borderBottomRightRadius:"3px"}} className=''><img src={searchEye} alt="" className=""/></div>
                </div>
             
              
            </div>
            
            <div className = "">
            <Form className='ms-2 mt-2'>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Adidas"
                            
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Armaf"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Armani"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Calvin Klein"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Dior"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Dolce & Gabbana"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Essenza"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Giorgio Armani"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Hugo Boss"
                        />
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label="Jimmy Choo"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Lataffa"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Mont Blanc"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Ralph Lauren"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Versace"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label="Yves Saint Laurent"
                        />
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label="Zaein"
                        />
                    </div>
                ))}
            </Form>
            </div>
            
        </div>

    );
}


