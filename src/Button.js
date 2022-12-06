import React from 'react';
import './index.css';
function Button() {
    return (
        <div className="service-section">
            <div className="service-border">
                <div className="service-image-section">
                    <img src={require('https://assets.entrepreneur.com/content/3x2/2000/20190820185239-GettyImages-985550942.jpeg')} alt="" />
                </div>
                <div className="service-image-heading">
                    <h5>Service blog</h5>
                    <div className="service-content">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;