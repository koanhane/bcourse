(() => {
 const links=[...document.querySelectorAll('.contents a')];
 const sections=[...document.querySelectorAll('main>section[id]')];
 function update(){let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=innerHeight*.3)current=section;}for(const a of links){if(a.hash==='#'+current.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}
 addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
 const v=document.querySelector('#prototype-video'),play=document.querySelector('#play-toggle'),speed=document.querySelector('#speed-toggle');v.muted=true;v.defaultPlaybackRate=2;v.playbackRate=2;
 function sync(){play.textContent=v.paused?'Play':'Pause';play.setAttribute('aria-label',v.paused?'Play walkthrough':'Pause walkthrough');}
 v.addEventListener('play',sync);v.addEventListener('pause',sync);play.onclick=()=>v.paused?v.play().catch(()=>{}):v.pause();
 speed.onclick=()=>{v.playbackRate=v.playbackRate===2?1:2;speed.textContent=v.playbackRate===2?'1×':'2×';document.querySelector('.player-controls span').textContent=`${v.playbackRate}× · muted loop`;};
 const stages=[[0,'01 / See','Dashboard → upcoming assignment','See the next assignment, due time, and effort directly beneath each course.'],[8,'02 / Schedule','Calendar → daily agenda','Check class times and locations alongside due dates and start reminders.'],[16,'03 / Start','Lab 6 → Remind me','Open the assignment, review estimated effort, and choose when to begin. The recording also shows the reminder arriving.'],[33.1,'04 / Adjust','Notifications → date changed','In a separate sample scenario, compare the old and new deadline and see the revised reminder.'],[41.1,'05 / Act','Inbox → find the reminder','Use filters, labels, and previews to identify the relevant message.'],[49.1,'05 / Act','Email → return to the assignment','Review the reminder details and use Open assignment to return to the work.']];
 v.addEventListener('timeupdate',()=>{const st=stages.filter(s=>v.currentTime>=s[0]).pop()||stages[0];document.querySelector('#demo-stage').textContent=st[1];document.querySelector('#demo-title').textContent=st[2];document.querySelector('#demo-description').textContent=st[3];});

})();
