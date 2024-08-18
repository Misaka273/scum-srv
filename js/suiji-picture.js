  var imageUrls = [
    // 请将「baimu.live」替换为自己的域名...
    'http://baimu.live/image/1.jpg',
    'http://baimu.live/image/2.jpg',
    'http://baimu.live/image/3.jpg',
    'http://baimu.live/image/4.jpg',
    'http://baimu.live/image/5.jpg',
    'http://baimu.live/image/6.jpg',
    'http://baimu.live/image/7.jpg',
    'http://baimu.live/image/8.jpg',
    'http://baimu.live/image/9.jpg',
    // 这里随机背景壁纸-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('background');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
//°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*
  var imageUrls = [
    // 请将「baimu.live」替换为自己的域名...
    'http://baimu.live/image/1.png',
    'http://baimu.live/image/2.png',
    'http://baimu.live/image/3.png',
    'http://baimu.live/image/4.png',
    'http://baimu.live/image/5.png',
    'http://baimu.live/image/6.png',
    'http://baimu.live/image/7.png',
    'http://baimu.live/image/8.png',
    'http://baimu.live/image/9.png',
    // 这里添加随机前景人物图-添加更多图片URL-最佳效果请用PNG透明图...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('bg');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
