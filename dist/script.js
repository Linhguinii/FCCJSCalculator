class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      result: 0,
      operator: '',
      decimal: false,
      negative: false,
      streak: 0 };

    this.handleChangeZero = this.handleChangeZero.bind(this);
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.handleChangeThree = this.handleChangeThree.bind(this);
    this.handleChangeFour = this.handleChangeFour.bind(this);
    this.handleChangeFive = this.handleChangeFive.bind(this);
    this.handleChangeSix = this.handleChangeSix.bind(this);
    this.handleChangeSeven = this.handleChangeSeven.bind(this);
    this.handleChangeEight = this.handleChangeEight.bind(this);
    this.handleChangeNine = this.handleChangeNine.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeSubtract = this.handleChangeSubtract.bind(this);
    this.handleChangeMultiply = this.handleChangeMultiply.bind(this);
    this.handleChangeDivide = this.handleChangeDivide.bind(this);
    this.handleChangeEqual = this.handleChangeEqual.bind(this);
    this.handleChangeClear = this.handleChangeClear.bind(this);
    this.handleChangeDecimal = this.handleChangeDecimal.bind(this);
  }
  handleChangeZero() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '0';
    } else
    if (display.innerText != '0' && display.innerText[display.innerText.length - 1] != '0') {
      display.innerText = display.innerText + '0';
    }
    this.state.streak = 0;
  }
  handleChangeOne() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '1';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '1';
    } else
    if (display.innerText == '0') {
      display.innerText = '1';
    }
    this.state.streak = 0;
  }
  handleChangeTwo() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '2';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '2';
    } else
    if (display.innerText == '0') {
      display.innerText = '2';
    }
    this.state.streak = 0;
  }
  handleChangeThree() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '3';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '3';
    } else
    if (display.innerText == '0') {
      display.innerText = '3';
    }
    this.state.streak = 0;
  }
  handleChangeFour() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '4';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '4';
    } else
    if (display.innerText == '0') {
      display.innerText = '4';
    }
    this.state.streak = 0;
  }
  handleChangeFive() {
    const display = document.getElementById('display');
    if (this.state.negative == true) {
      display.innerText = display.innerText + '5';
      this.setState({
        negative: false });

    } else
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '5';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '5';
    } else
    if (display.innerText == '0') {
      display.innerText = '5';
    }
    this.state.streak = 0;
  }
  handleChangeSix() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '6';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '6';
    } else
    if (display.innerText == '0') {
      display.innerText = '6';
    }
    this.state.streak = 0;
  }
  handleChangeSeven() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '7';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '7';
    } else
    if (display.innerText == '0') {
      display.innerText = '7';
    }
    this.state.streak = 0;
  }
  handleChangeEight() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '8';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '8';
    } else
    if (display.innerText == '0') {
      display.innerText = '8';
    }
    this.state.streak = 0;
  }
  handleChangeNine() {
    const display = document.getElementById('display');
    if (display.innerText == '+' || display.innerText == '-' || display.innerText == 'x' || display.innerText == '/') {
      display.innerText = '9';
    } else
    if (display.innerText != '0') {
      display.innerText = display.innerText + '9';
    } else
    if (display.innerText == '0') {
      display.innerText = '9';
    }
    this.state.streak = 0;
  }
  handleChangeAdd() {
    const display = document.getElementById('display');
    const display_length = display.innerText.length;
    if (this.state.operator == '-' && this.state.streak == 0) {
      this.state.result -= parseFloat(display.innerText);
      display.innerText = '+';
      this.setState({
        operator: '+',
        decimal: false,
        negative: false });

    } else
    if (display.innerText[display_length - 1] != '+') {
      if (display.innerText != '+' && display.innerText != '-' && display.innerText != 'x' && display.innerText != '/' && this.state.operator != '=') {
        this.state.result += parseFloat(display.innerText);
      }
      display.innerText = '+';
      this.setState({
        operator: '+',
        negative: false,
        decimal: false });

    }
    this.state.streak += 1;
    this.setState({
      operator: '+' });

  }
  handleChangeMultiply() {
    const display = document.getElementById('display');
    const display_length = display.innerText.length;
    if (this.state.operator == '') {
      this.state.result += parseFloat(display.innerText);
      display.innerText = 'x';
      this.setState({
        operator: 'x',
        decimal: false });

    } else
    if (this.state.operator == '+') {
      this.state.result += parseFloat(display.innerText);
      display.innerText = 'x';
      this.setState({
        operator: 'x',
        decimal: false });

    }
    this.state.streak += 1;
  }
  handleChangeSubtract() {
    const display = document.getElementById('display');
    const display_length = display.innerText.length;
    if (this.state.operator == 'x' && display.innerText == 'x') {
      display.innerText = '-';
      this.setState({
        operator: 'x',
        decimal: false,
        negative: true });

    } else
    if (this.state.operator == 'x') {
      this.state.result *= parseFloat(display.innerText);
      display.innerText = '-';
      this.setState({
        operator: '-',
        decimal: false });

    } else
    if (this.state.operator == '') {
      this.state.result += parseFloat(display.innerText);
      display.innerText = '-';
      this.setState({
        operator: '-',
        decimal: false });

    }
    this.state.streak += 1;
  }
  handleChangeDivide() {
    const display = document.getElementById('display');
    const display_length = display.innerText.length;
    if (this.state.operator == '') {
      if (this.state.result == 0) {
        this.state.result += parseFloat(display.innerText);
      }
      display.innerText = '/';
      this.setState({
        operator: '/',
        decimal: false });

    } else
    if (this.state.operator == '-') {
      this.state.result -= parseFloat(display.innerText);
      display.innerText = '/';
      this.setState({
        operator: '/',
        decimal: false });

    }
    display.innerText = '/';
    this.setState({
      operator: '/',
      decimal: false });

    this.state.streak += 1;
  }
  handleChangeDecimal() {
    const display = document.getElementById('display');
    if (display.innerText[display.innerText.length - 1] != '.' && this.state.decimal == false) {
      display.innerText = display.innerText + '.';
      this.setState({
        decimal: true });

    }

  }
  handleChangeEqual() {
    const display = document.getElementById('display');
    const display_length = display.innerText.length;
    if (this.state.operator == '+') {
      this.state.result += parseFloat(display.innerText);
      this.setState({
        operator: '=' });

    } else
    if (this.state.operator == '-') {
      this.state.result -= parseFloat(display.innerText);
      this.setState({
        operator: '' });

    } else
    if (this.state.operator == 'x') {
      this.state.result *= parseFloat(display.innerText);
    } else
    if (this.state.operator == '/') {
      this.state.result /= parseFloat(display.innerText);
    }
    this.state.number = this.state.result;
    display.innerText = this.state.number;
  }
  handleChangeClear() {
    const display = document.getElementById('display');
    display.innerText = '0';
    this.setState({
      number: 0,
      result: 0,
      operator: '',
      decimal: false,
      negative: false,
      streak: 0 });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "main" }, /*#__PURE__*/
      React.createElement("div", { id: "display" },
      this.state.number), /*#__PURE__*/

      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "clear", onClick: this.handleChangeClear }, "AC"), /*#__PURE__*/


      React.createElement("div", { id: "divide", onClick: this.handleChangeDivide }, "/"), /*#__PURE__*/


      React.createElement("div", { id: "multiply", onClick: this.handleChangeMultiply }, "x"), /*#__PURE__*/


      React.createElement("div", { id: "seven", onClick: this.handleChangeSeven }, "7"), /*#__PURE__*/


      React.createElement("div", { id: "eight", onClick: this.handleChangeEight }, "8"), /*#__PURE__*/


      React.createElement("div", { id: "nine", onClick: this.handleChangeNine }, "9"), /*#__PURE__*/


      React.createElement("div", { id: "subtract", onClick: this.handleChangeSubtract }, "-"), /*#__PURE__*/


      React.createElement("div", { id: "four", onClick: this.handleChangeFour }, "4"), /*#__PURE__*/


      React.createElement("div", { id: "five", onClick: this.handleChangeFive }, "5"), /*#__PURE__*/


      React.createElement("div", { id: "six", onClick: this.handleChangeSix }, "6"), /*#__PURE__*/


      React.createElement("div", { id: "add", onClick: this.handleChangeAdd }, "+"), /*#__PURE__*/


      React.createElement("div", { id: "one", onClick: this.handleChangeOne }, "1"), /*#__PURE__*/


      React.createElement("div", { id: "two", onClick: this.handleChangeTwo }, "2"), /*#__PURE__*/


      React.createElement("div", { id: "three", onClick: this.handleChangeThree }, "3"), /*#__PURE__*/


      React.createElement("div", { id: "equals", onClick: this.handleChangeEqual }, "="), /*#__PURE__*/


      React.createElement("div", { id: "zero", onClick: this.handleChangeZero }, "0"), /*#__PURE__*/


      React.createElement("div", { id: "decimal", onClick: this.handleChangeDecimal }, "."))));





  }}


document.addEventListener('keydown', e => {
  if (e.key == '0') {
    const input = document.getElementById('zero');
    input.click();
  } else
  if (e.key == '1') {
    const input = document.getElementById('one');
    input.click();
  } else
  if (e.key == '2') {
    const input = document.getElementById('two');
    input.click();
  } else
  if (e.key == '3') {
    const input = document.getElementById('three');
    input.click();
  } else
  if (e.key == '4') {
    const input = document.getElementById('four');
    input.click();
  } else
  if (e.key == '5') {
    const input = document.getElementById('five');
    input.click();
  } else
  if (e.key == '6') {
    const input = document.getElementById('six');
    input.click();
  } else
  if (e.key == '7') {
    const input = document.getElementById('seven');
    input.click();
  } else
  if (e.key == '8') {
    const input = document.getElementById('eight');
    input.click();
  } else
  if (e.key == '9') {
    const input = document.getElementById('nine');
    input.click();
  } else
  if (e.key == '+') {
    const input = document.getElementById('add');
    input.click();
  } else
  if (e.key == '-') {
    const input = document.getElementById('subtract');
    input.click();
  } else
  if (e.key == 'x') {
    const input = document.getElementById('multiply');
    input.click();
  } else
  if (e.key == '/') {
    const input = document.getElementById('divide');
    input.click();
  } else
  if (e.key == 'Enter') {
    const input = document.getElementById('equals');
    input.click();
  } else
  if (e.key == 'Backspace') {
    const input = document.getElementById('clear');
    input.click();
  } else
  if (e.key == '.') {
    const input = document.getElementById('decimal');
    input.click();
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));