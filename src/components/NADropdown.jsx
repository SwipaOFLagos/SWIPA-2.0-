import React from 'react'
import "../css/Newarrival.css"
// import Dropdown from 'react-bootstrap/Dropdown';

function Mydropdown1() {
    return (
        <div>
            <form>
                <label className= "me-2"><b>Sort By</b></label>
                <select name="cars" id="cars">
                    <option value="New Arrival">New Arrival</option>
                    <option value="Best Seller">Best Seller</option>
                </select>
            </form>
        </div>

    );
}
export default Mydropdown1;

export function Mydropdown2() {
    return (
        <div className='select-wrapper'>
            <select name="cars" id="cars"  >
                <option value="New Arrival">New Arrival</option>
                <option value="Best Seller">Best Seller</option>
            </select>
        </div>

    );
}



