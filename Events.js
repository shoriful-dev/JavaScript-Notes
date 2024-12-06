// Mouse Events
element.onclick = function() {};         // Triggered when the element is clicked
element.ondblclick = function() {};      // Triggered on double-click
element.onmousedown = function() {};     // Triggered when mouse button is pressed
element.onmouseup = function() {};       // Triggered when mouse button is released
element.onmousemove = function() {};     // Triggered when mouse is moved over the element
element.onmouseover = function() {};     // Triggered when mouse enters the element
element.onmouseout = function() {};      // Triggered when mouse leaves the element
element.onmouseenter = function() {};    // Similar to mouseover, doesn't bubble
element.onmouseleave = function() {};    // Similar to mouseout, doesn't bubble
element.oncontextmenu = function() {};   // Triggered on right-click

// Keyboard Events
element.onkeydown = function() {};       // Triggered when a key is pressed
element.onkeyup = function() {};         // Triggered when a key is released
element.onkeypress = function() {};      // Triggered when a key is pressed and released

// Form Events
element.onsubmit = function() {};        // Triggered when a form is submitted
element.onreset = function() {};         // Triggered when a form is reset
element.oninput = function() {};         // Triggered when an input value changes
element.onchange = function() {};        // Triggered when the value of an input element changes
element.onfocus = function() {};         // Triggered when an element receives focus
element.onblur = function() {};          // Triggered when an element loses focus

// Window Events
window.onload = function() {};           // Triggered when the page finishes loading
window.onunload = function() {};         // Triggered when the user navigates away from the page
window.onresize = function() {};         // Triggered when the browser window is resized
window.onscroll = function() {};         // Triggered when the document is scrolled

// Drag Events
element.ondrag = function() {};          // Triggered when an element is dragged
element.ondragstart = function() {};     // Triggered at the start of a drag operation
element.ondragend = function() {};       // Triggered at the end of a drag operation
element.ondragenter = function() {};     // Triggered when a dragged element enters a drop target
element.ondragleave = function() {};     // Triggered when a dragged element leaves a drop target
element.ondragover = function() {};      // Triggered when an element is being dragged over a drop target
element.ondrop = function() {};          // Triggered when an element is dropped on a drop target

// Touch Events
element.ontouchstart = function() {};    // Triggered when a touch point is placed on the touch surface
element.ontouchmove = function() {};     // Triggered when a touch point is moved along the touch surface
element.ontouchend = function() {};      // Triggered when a touch point is removed from the touch surface
element.ontouchcancel = function() {};   // Triggered when a touch point has been disrupted

// Miscellaneous Events
element.onerror = function() {};         // Triggered when an error occurs
element.onabort = function() {};         // Triggered when the loading of a resource has been aborted

element.addEventListener('click', function() {
  // Event handler code here
});
