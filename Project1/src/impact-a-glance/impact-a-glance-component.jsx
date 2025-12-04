import React from 'react';
import { ImpactGlanceStyle } from './impact-glance-style';

const ImpactAGlanceComponent = () => {

    return (
        <ImpactGlanceStyle>
            <div className='total_container'>
                <div className='impactaglance'>
                    <div className='impact'><h1>Impact a <span className='glance'>Glance</span>  </h1></div>
                   
                </div>
                
                <div className='colleges'>
                    <img src="https://www.aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="" />
                    <h3>Colleges</h3>
                    <h2>100+</h2>
                </div>

                <div className='students'>
                    <img src="https://www.aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="" />
                    <h3>Students</h3>
                    <h2>100000</h2>
                </div>

                <div className='studeymaterials'>
                    <img src="https://www.aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="" />
                    <h3>Studey Materials</h3>
                    <h2>1000+</h2>
                </div>

                <div className='professionaltrainers'>
                    <img src="https://www.aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="" />
                    <h3>Professional Trainers</h3>
                    <h2>150</h2>
                </div>
            </div>
        </ImpactGlanceStyle>

    );
};

export default ImpactAGlanceComponent;