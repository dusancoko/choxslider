# choxslider
Image slider written in Typescript.

#### Usage
**Requirements:**
 * Every image element has to have class 'item'. Their CSS setting 'display' should be set to 'none'.
 * There should be two elements which have classes 'previous' and 'next' respectfully
 
**Initialization**

new ChoxSlider(_CSS selector_);

This will initialize the slider root element which will search for all children elements with 'item' class. Also element will also search for children elements with class 'previous' and 'next'
