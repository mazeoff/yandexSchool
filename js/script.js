"use strict"
let root = document.querySelector('.root');

function renderWaterfall(rootNode, columnCount, elementGap) {

  const elements = document.querySelectorAll(".el");
  rootNode.style.display = 'flex';
  rootNode.style.flexDirection = 'row';
  rootNode.style.justifyContent = 'space-between';
  rootNode.style.alignItems = 'flex-start';

  rootNode.innerHTML = '';
  var colWidth = '100%';
  for (var i = 0; i < columnCount; i++) {
    rootNode.innerHTML = rootNode.innerHTML + '<div class=column style="width:' + colWidth + '"></div>';
  }

  let columns = document.querySelectorAll('.column');
  columns.forEach(function(col) {
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
  });


  let lowest = 0;
  for (var i = 0; i < elements.length; i++) {
    for (var j = 1; j < columns.length; j++) {
      if (columns[j].clientHeight < columns[lowest].clientHeight){
        lowest = j;
      }else if (columns[j].clientHeight == columns[lowest].clientHeight && columns[j].clientHeight != 0) {
        lowest = 0;
      }
        console.log(columns[j].clientHeight);
    }
    columns[lowest].appendChild(elements[i]);
  }

  var css = '.el+.el{margin-top:'+String(elementGap)+'px;} .column+.column{margin-left:'+String(elementGap)+'px;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);

}

renderWaterfall(root,3, 5);
