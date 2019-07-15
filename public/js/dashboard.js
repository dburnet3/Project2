var divElement = document.getElementById('viz1562883470335');                    
var vizElement = divElement.getElementsByTagName('object')[0];                    
if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height='40%';} 
else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height='40%';} 
else { vizElement.style.width='100%';vizElement.style.height='727px';}                     
var scriptElement = document.createElement('script');                    
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
vizElement.parentNode.insertBefore(scriptElement, vizElement);   