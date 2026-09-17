    // Function to handle hover functionality for a specific selector

    console.log('helpers');
    function handleHover(selector) {
      let links = document.querySelectorAll(selector);

      // Function to remove .inactive class from all links
      function removeAllInactiveClass() {
          links.forEach(link => link.classList.remove('inactive'));
      }

      // Add event listener to each link
      links.forEach(link => {
          // When mouse enters the link
          link.addEventListener('mouseenter', function() {
              // First, remove .inactive from all links
              removeAllInactiveClass();
              // Then, add .inactive to all other links
              links.forEach(otherLink => {
                  if (otherLink !== link) {
                      otherLink.classList.add('inactive');
                  }
              });
          });

          // When mouse leaves the link
          link.addEventListener('mouseleave', function() {
              removeAllInactiveClass();
          });
      });
  }

  // Call the function for each selector
  handleHover('.nav-child-li .nav-link');
