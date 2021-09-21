var input = document.querySelector('input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
input{ font-size:1.3em; padding:.5em; }
<input></input>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Get/set width of &lt;input&gt;</title>
    <style>
      body {
        background: #666;
      }

      .input-element {
        border: 0;
        padding: 2px;
        background: #fff;
        font: 12pt sans-serif;
      }

      .tmp-element {
        visibility: hidden;
        white-space: pre;
      }
    </style>
  </head>
  <body>
    <input id="theInput" type="text" class="input-element" value="1">
    <script>
      var inputEl = document.getElementById("theInput");

      function getWidthOfInput() {
        var tmp = document.createElement("span");
        tmp.className = "input-element tmp-element";
        tmp.innerHTML = inputEl.value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        document.body.appendChild(tmp);
        var theWidth = tmp.getBoundingClientRect().width;
        document.body.removeChild(tmp);
        return theWidth;
      }

      function adjustWidthOfInput() {
        inputEl.style.width = getWidthOfInput() + "px";
      }

      adjustWidthOfInput();
      inputEl.onkeyup = adjustWidthOfInput;
    </script>
  </body>
</html>
