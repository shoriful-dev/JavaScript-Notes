// DOM Basics
// The DOM represents the document as a tree structure of elements

// Selecting Elements
document.getElementById('id')                 // Select element by id
document.getElementsByClassName('class')      // Select elements by class name
document.getElementsByTagName('tag')          // Select elements by tag name
document.querySelector('css selector')        // Select first element matching CSS selector
document.querySelectorAll('css selector')     // Select all elements matching CSS selector

// Traversing the DOM
element.parentNode                            // Parent node
element.childNodes                            // Child nodes
element.firstChild                            // First child node
element.lastChild                             // Last child node
element.nextSibling                           // Next sibling
element.previousSibling                       // Previous sibling
element.children                              // Child elements
element.firstElementChild                     // First child element
element.lastElementChild                      // Last child element
element.nextElementSibling                    // Next sibling element
element.previousElementSibling                // Previous sibling element

// Manipulating Elements
document.createElement('tag')                 // Create new element
document.createTextNode('text')               // Create text node
element.appendChild(childElement)             // Append child element
element.removeChild(childElement)             // Remove child element
element.replaceChild(newChild, oldChild)      // Replace child element
element.insertBefore(newElement, referenceElement) // Insert before an element
element.cloneNode(deep)                       // Clone an element (deep: include children)

// Manipulating Attributes
element.getAttribute('attribute')             // Get attribute value
element.setAttribute('attribute', 'value')    // Set attribute value
element.removeAttribute('attribute')          // Remove attribute
element.hasAttribute('attribute')             // Check if attribute exists

// Manipulating CSS
element.style.property = 'value'              // Set inline CSS property
element.className = 'class'                   // Set class name
element.classList.add('class')                // Add class
element.classList.remove('class')             // Remove class
element.classList.toggle('class')             // Toggle class
element.classList.contains('class')           // Check if class exists

// Manipulating Content
element.textContent = 'text'                  // Set text content
element.innerHTML = 'html'                    // Set HTML content
element.innerText = 'text'                    // Set visible text content

// Event Handling
element.addEventListener('event', function(e) {
  // Event handler code
})
element.removeEventListener('event', function(e){  // Remove event listener
  // Event handler code
})

// Common Events
'click', 'dblclick'                           // Mouse click events
'mouseenter', 'mouseleave'                    // Mouse enter/leave events
'mouseover', 'mouseout'                       // Mouse over/out events
'keydown', 'keyup', 'keypress'                // Keyboard events
'submit', 'change', 'focus', 'blur'           // Form events
'load', 'DOMContentLoaded'                    // Document/window loading events

// Event Object Properties
event.target                                  // Element that triggered the event
event.type                                    // Type of event
event.preventDefault()                        // Prevent default behavior
event.stopPropagation()                       // Stop event bubbling

// DOM Manipulation Performance
document.createDocumentFragment()             // Create a document fragment for batch insertions
element.innerHTML += 'content'                // Avoid for repeated additions (inefficient)
requestAnimationFrame(callback)               // Optimize animations and layout calculations

// DOM Ready Event
document.addEventListener('DOMContentLoaded', function() {
  // DOM is ready, safe to manipulate
})

// Viewport Dimensions
window.innerWidth                             // Viewport width
window.innerHeight                            // Viewport height

// Document Dimensions
document.documentElement.clientWidth          // Document width
document.documentElement.clientHeight         // Document height

// Element Dimensions and Position
element.offsetWidth                           // Element width (including borders and padding)
element.offsetHeight                          // Element height (including borders and padding)
element.clientWidth                           // Element content width
element.clientHeight                          // Element content height
element.getBoundingClientRect()               // Get element's size and position relative to viewport

// Scrolling
window.scrollTo(x, y)                         // Scroll to specific coordinates
element.scrollIntoView()                      // Scroll element into view

// Data Attributes
element.dataset.customAttribute               // Access data-* attributes

// Browser Support
if (typeof element.method === 'function') {
  // Check if a method is supported
}
