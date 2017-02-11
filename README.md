# choxslider
Image slider written in Typescript.

#### Usage
**Requirements:**
 * Every image elements has to have class 'item'. In your CSS 'display' should be set to 'none'.
 * There should be two elements which have classes 'previous' and 'next' respectfully
 
**Initialization**

new ChoxSlider(_CSS selector_);

This will initialize the slider root element which will search all children elements with 'item' class. Also element will search elements with class 'previous' and 'next'
