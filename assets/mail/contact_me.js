$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      // $this = $("#sendMessageButton");
      // $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

      subject = "Contact From GitHub Page - tand826"
      body = `${name}(${email})%0D%0A${message}`
      location.href = `mailto:takumi.ando826@gmail.com?subject=${subject}&body=${body}`

      const userAgent = window.navigator.userAgent.toLowerCase();

      if(userAgent.indexOf('msie') != -1 ||
              userAgent.indexOf('trident') != -1) {
          //console.log('Internet Explorerをお使いですね');
      } else if(userAgent.indexOf('edge') != -1) {
          //console.log('Edgeをお使いですね');
      } else if(userAgent.indexOf('chrome') != -1) {
        //alert("Sorry, mailto seems not work well with chrome. Copy my email and make message.")
        //console.log('Google Chromeをお使いですね');
      } else if(userAgent.indexOf('safari') != -1) {
          //console.log('Safariをお使いですね');
      } else if(userAgent.indexOf('firefox') != -1) {
          //console.log('FireFoxをお使いですね');
      } else if(userAgent.indexOf('opera') != -1) {
          //console.log('Operaをお使いですね');
      } else {
          //console.log('そんなブラウザは知らん');
      }

      /*
      $.ajax({
        url: `mailto:takumi.ando826@gmail.com?subject=${subject}&amp;body=${body}`,
        type: "GET",
        cache: false,
        success: function() {
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      })
      */

      /*
      $.ajax({
        url: "contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
      */

    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
