(() => {
  const video = document.querySelector('#prototype-video');
  const play = document.querySelector('#play-toggle');
  const speed = document.querySelector('#speed-toggle');
  const status = document.querySelector('#playback-status');
  video.muted = true;
  video.defaultPlaybackRate = 2;
  video.playbackRate = 2;
  const sync = () => {
    play.textContent = video.paused ? 'Play' : 'Pause';
    play.setAttribute('aria-label', video.paused ? 'Play prototype' : 'Pause prototype');
  };
  const start = () => {
    video.play().then(() => { status.textContent = ''; }).catch(() => {
      status.textContent = 'Your browser paused autoplay. Press Play to start.';
      sync();
    });
  };
  video.addEventListener('loadedmetadata', start, { once: true });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  play.addEventListener('click', () => video.paused ? start() : video.pause());
  speed.addEventListener('click', () => {
    video.playbackRate = video.playbackRate === 2 ? 1 : 2;
    speed.textContent = video.playbackRate === 2 ? '1×' : '2×';
    speed.setAttribute('aria-label', video.playbackRate === 2 ? 'Play at normal speed' : 'Play at double speed');
    document.querySelector('.player-controls span').textContent = `V3 · ${video.playbackRate}× speed · muted loop`;
  });
  if (video.readyState >= 1) start();
})();

(() => {
  const links = [...document.querySelectorAll('.sidebar .contents a')];
  const sections = [...document.querySelectorAll('main > section[id]')];
  let queued = false;
  function update() {
    const marker = window.innerHeight * 0.3;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) current = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) current = sections[sections.length - 1];
    for (const link of links) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    queued = false;
  }
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
})();
