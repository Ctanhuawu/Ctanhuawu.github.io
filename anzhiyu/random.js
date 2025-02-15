var posts=["pages/Ubuntu/ubuntu24_10_xorg_fix/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };