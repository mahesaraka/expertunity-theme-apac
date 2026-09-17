document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.trigger-modal');
  const modal = document.querySelector('.registration-banner__modal');
  const content = modal && modal.querySelector('.registration-banner__modal-content');
  
  if (!modal || !content || triggers.length === 0) return;
  
  // Open modal
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      if (!modal.classList.contains('registration-banner__modal--show')) {
        modal.classList.add('registration-banner__modal--show');
      }
    });
  });
  
  // Close modal when clicking outside the content area
  modal.addEventListener('click', (event) => {
    // If the click target is not inside the content container, close
    if (!content.contains(event.target)) {
      modal.classList.remove('registration-banner__modal--show');
    }
  });
});
