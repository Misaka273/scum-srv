var imageUrls = [
    'http://baimu.live/scum/imgs/1.jpg',
    'http://baimu.live/scum/imgs/2.jpg',
    'http://baimu.live/scum/imgs/3.jpg',
    'http://baimu.live/scum/imgs/4.jpg',
    'http://baimu.live/scum/imgs/5.jpg',
    'http://baimu.live/scum/imgs/6.jpg',
    'http://baimu.live/scum/imgs/7.jpg',
    'http://baimu.live/scum/imgs/8.jpg',
    'http://baimu.live/scum/imgs/9.jpg',
    // 这里随机背景壁纸-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('background');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
//°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*
  var imageUrls = [
    'http://baimu.live/scum/imgs/1.png',
    'http://baimu.live/scum/imgs/2.png',
    'http://baimu.live/scum/imgs/3.png',
    'http://baimu.live/scum/imgs/4.png',
    'http://baimu.live/scum/imgs/5.png',
    'http://baimu.live/scum/imgs/6.png',
    'http://baimu.live/scum/imgs/7.png',
    'http://baimu.live/scum/imgs/8.png',
    'http://baimu.live/scum/imgs/9.png',
    // 这里添加随机前景人物图-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('bg');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';