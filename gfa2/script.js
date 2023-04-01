function add() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 + num2;
      document.getElementById('result').innerText = `${num1} + ${num2} = ${result}`;
    }
    
    function subtract() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 - num2;
      document.getElementById('result').innerText = `${num1} - ${num2} = ${result}`;
    }
    
    function multiply() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 * num2;
      document.getElementById('result').innerText = `${num1} * ${num2} = ${result}`;
    }
    
    function divide() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 / num2;
      document.getElementById('result').innerText = `${num1} / ${num2} = ${result}`;
    }
    
    function modulus() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 % num2;
      document.getElementById('result').innerText = `${num1} % ${num2} = ${result}`;
    }
    