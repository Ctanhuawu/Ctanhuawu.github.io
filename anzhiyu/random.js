var posts=["pages/Hexo/Hexo 使用安知鱼主题，图片全部无法显示/","pages/Linux/Linux Server 使用 Clash Tun 模式实现透明代理（Clash + Yacd管理界面）/","pages/FnOS/fnos_ssl_automatic_renewal/","pages/Linux/ubuntu24_10_xorg_fix/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };