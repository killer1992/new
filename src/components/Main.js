require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
var imageDates = require('../data/imageDates.json');

//利用自执行函数，将图片名信息转成URL路径信息
imageDates = (function genImageUrl(imageDatsArr) {
  for(var i = 0, j = imageDatsArr.length; i < j; i++){
    var singleImageDate = imageDatsArr[i];

    singleImageDate.imageUrl = require('../images/' + singleImageDate.fileName);

    imageDatsArr[i] = singleImageDate;
  }

  return imageDatsArr;
})(imageDates);

class AppComponent extends React.Component {
  render() {
    return (
      <sectiomn className="stage">
        <section className="img-sec"></section>
        <nav className="controllor-nav"></nav>
      </sectiomn>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
