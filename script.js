let outputscreen = document.getElementById("output-screen");
      function display(val) {
        outputscreen.value = outputscreen.value + val;
      }
      function cal() {
        try {
          outputscreen.value = eval(outputscreen.value);
        } catch (error) {
          outputscreen.value = "invalid operation";
        }
      }
      function Clear(){
        outputscreen.value ='';
      }

      function del() {
        outputscreen.value = outputscreen.value.slice(0, -1);
      }
      