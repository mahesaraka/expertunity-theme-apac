document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-media').forEach(wrapper => {
      const video    = wrapper.querySelector('video');
      const controls = wrapper.querySelector('.video-media__controls');
      if (!video) return;
  
      if (video.paused) {
        wrapper.classList.add('video-media--paused');
      } else {
        wrapper.classList.remove('video-media--paused');
      }
  
      video.addEventListener('play', () => {
        wrapper.classList.remove('video-media--paused');
      });
      video.addEventListener('pause', () => {
        wrapper.classList.add('video-media--paused');
      });
  
      if (controls) {
        controls.addEventListener('click', e => {
          e.stopPropagation();
          if (video.paused) {
            video.play();
          }
        });
      }
  
      wrapper.addEventListener('click', e => {
        if (e.target.closest('video')) return;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  });
  