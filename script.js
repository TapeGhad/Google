document.getElementById("inputField").addEventListener("input", function() {
    if( document.getElementById('inputField').value.length == 0 ) {
        let y = document.getElementById('clearCross');
        y.className="fa fa-times search closed"
        y = document.getElementById('clearLine');
        y.className="vertical_line closed"
    } else {
        let y = document.getElementById('clearCross');
        y.className="fa fa-times search open"
        y = document.getElementById('clearLine');
        y.className="vertical_line open"
    }
  });

  clearCross.onclick = function Clear() {
    document.getElementById('inputField').value = "";
    let y = document.getElementById('clearCross');
    y.className="fa fa-times search closed"
    y = document.getElementById('clearLine');
    y.className="vertical_line closed";
    inputField.focus();
    document.getElementById('settings_block').className = 'settings closed'
}

searchKeyboard.onclick = function Keyboard() {
    let x = document.getElementById('keyboard');
    if (x.className==="keyboard_block closed")
    {
        x.className = "keyboard_block open"
    }
    else {
        x.className = "keyboard_block closed"
    }
    document.getElementById('settings_block').className = 'settings closed'
}

closeKeyboard.onclick = function closeKeyboard() {
    document.getElementById('keyboard').className = "keyboard_block closed"
}

b184.onclick = function Print() {
    document.getElementById('inputField').value += "ё"
    let y = document.getElementById('clearCross');
    y.className="fa fa-times search open"
    y = document.getElementById('clearLine');
    y.className="vertical_line open"
    inputField.focus();
}

settings.onclick = function Settings() {
    if( document.getElementById('settings_block').className === 'settings closed' ) {
        document.getElementById('settings_block').className = 'settings open'
    } else {
        document.getElementById('settings_block').className = 'settings closed'
    }
}

userLogo.onclick = function Settings() {
    if( document.getElementById('userPage').className === 'personal_page closed' ) {
        document.getElementById('userPage').className = 'personal_page open'
    } else {
        document.getElementById('userPage').className = 'personal_page closed'
    }
}

