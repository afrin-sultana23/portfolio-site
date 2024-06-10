import React from 'react';
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={15}
                outerSize={40}
                color='21, 245, 186'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    '.point-expand'
                ]}
            />
        </div>
    );
};

export default AnimCursor;
