import React from "react";
import { PositionStyle} from "./position-style";

const PositionComponent = () => {
    return (
        <PositionStyle>
            <div className="element"></div>
            <div className="element__one"></div>
            <div className="element__one"></div>
            <div className="element__one"></div>
            <div className="element__one"></div>
            <div className="element__one"></div>
            <div className="element__one"></div>
            <div className="square">
                <div className="square__element"></div>
            </div>
        </PositionStyle>
    );
}

export default PositionComponent;