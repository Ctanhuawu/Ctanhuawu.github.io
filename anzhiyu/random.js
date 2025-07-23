var posts=["pages/FnOS/fnos_ssl_automatic_renewal/","pages/Ubuntu/ubuntu24_10_xorg_fix/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };