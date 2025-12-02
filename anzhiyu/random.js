var posts=["post/29914.html","post/51626.html","post/14968.html","post/17284.html","post/32059.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };