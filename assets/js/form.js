// (function () {
//     document.forms.contactForm.noValidate = true;
//     $('form').on('submit', function(e) {
// var elements = this.elements;
// var valid = {};
// var isValid;
// var isFormValid;


//     })
// })


// (function(){ 
  
//     var form = document.getElementById('contactForm');       // Get form element
  
//     addEvent(form, 'submit', function(e) {             // When user submits form
//       e.preventDefault();                              // Stop it being sent
//       var msg      = 'Your Message has been succesfully sent ';            // Create welcome message
//       document.getElementById('main').textContent = msg; // Write welcome message
//     });
//   }());

// (function(){
//     var form      = document.getElementById('contactForm');  // The form
//     var name  = document.getElementById('name');     // name input
//     // var tel    = document.getElementById('tel');  // tel button
//     // var tattooIdea  = document.getElementById('tattooIdea');     // tattoo idea input
//     // var size  = document.getElementById('size');     // size input
//     // var available  = document.getElementById('available');     // available input
//     var submit    = document.getElementById('submit');  // Submit button

//     var submitted = false;                            // Has form been submitted?
//     submit.disabled = true;                           // Disable submit button
//     submit.className = 'disabled';                    // Style submit button
//     console.log(submit.className);
    
//     // On input: Check whether or not to enable the submit button
//     addEvent(name, 'input', function(e) {         // On input of name
//       var target = e.target || e.srcElement;          // Target of event
//       submit.disabled = submitted || !target.value;   // Set disabled property
//       // If form has been submitted or pwd has no value set CSS to disabled
//       submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
//     }); 
    
  
//     // On submit: Disable the form so it cannot be submitted again
//     addEvent(form, 'submit', function(e) {            // On submit
//       if (submit.disabled || submitted) {             // If disabled OR sent
//         e.preventDefault();                           // Stop form submitting
//         return;                                       // Stop processing function
//       }                                               // Otherwise continue...
//       submit.disabled = true;                         // Disable submit button
//       submitted = true;                               // Update submitted var
//       submit.className = 'disabled';                  // Update style
  
//       // Demo purposes only: What would have been sent & show submit is disabled
//       e.preventDefault();                             // Stop form submitting
//     // Show the text
//     });
//   }());


