import React from 'react';
import logo from './images/logoo.png';

const content = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <img src={logo} />
                <p id="disc1"> $20 Water Painting </p>
            </div>
            <div class="col-md-3">
                <img src={logo} />
                <p id="disc1s"> $20 Water Painting </p>
            </div> <div class="col-md-3">
                <img src={logo} />
                <p id="disc1"> $20 Water Painting </p>
            </div>
        </div>
      
    </div>
  )
}

export default content
