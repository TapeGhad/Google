keyboard_move.ondragstart = function() {
    return false;
  };

  keyboard_move.onmousedown = function(e) { 
    let coords = getCoords(keyboard);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    keyboard.style.position = 'absolute';
    moveAt(e);

    
    document.body.appendChild(keyboard);
  
    keyboard.style.zIndex = 1000;
  
    function moveAt(e) {
        keyboard.style.left = e.pageX - shiftX + 'px';
        keyboard.style.top = e.pageY - shiftY + 'px';
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    }
  
    keyboard.onmouseup = function() {
      document.onmousemove = null;
      keyboard.onmouseup = null;
    }
  }

  function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }