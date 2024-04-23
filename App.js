

import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';



const App = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [op, setOp] = useState('');
  const [result, setResult] = useState('');


  const clearAll = () => {
    setNum1('');
    setNum2('');
    setOp('');
    setResult('')
  }

  const removeItem = () => {
    // If operator is set, remove the last character from num2
    if (op && num2.length > 0) {
      setNum2(num2.slice(0, -1));
    }
    // If operator is not set and num2 is empty, remove the operator
    else if (!op && num2 === '' && op !== '') {
      setOp('');
    }
    // If num2 is empty and an operator is set, remove the operator
    else if (num2 === '' && op !== '') {
      setOp('');
    }
    // If num1 is not empty, remove the last character from num1
    else if (num1.length > 0) {
      setNum1(num1.slice(0, -1));
    }
  };

  const appendDigit = (currentNum, digit) => {
    if (digit === '.') {
      // If currentNum already contains a decimal point, do nothing
      if (currentNum.includes('.')) {
        return currentNum;
      }
      // If currentNum is empty, append '0.' to represent a starting decimal point
      if (currentNum === '') {
        return '0.';
      }

      return currentNum + digit;
    }

    if (currentNum === '0') {
      return digit;
    } else {
      console.log(currentNum + digit);
      return currentNum + digit;

    }

  };

  const setPoint = () => {
    if (op) {
      // If operator is set, append decimal point to num2
      setNum2(appendDigit(num2, '.'));
    } else {
      // If operator is not set, append decimal point to num1
      setNum1(appendDigit(num1, '.'));
    }
  };

  const setZero = () => {
    op ? setNum2(appendDigit(num2, '0')) : setNum1(appendDigit(num1, '0'));
  };

  const setOne = () => {
    op ? setNum2(appendDigit(num2, '1')) : setNum1(appendDigit(num1, '1'));
  };

  const setTwo = () => {
    op ? setNum2(appendDigit(num2, '2')) : setNum1(appendDigit(num1, '2'));
  };

  const setThree = () => {
    op ? setNum2(appendDigit(num2, '3')) : setNum1(appendDigit(num1, '3'));
  };

  const setFour = () => {
    op ? setNum2(appendDigit(num2, '4')) : setNum1(appendDigit(num1, '4'));
  };

  const setFive = () => {
    op ? setNum2(appendDigit(num2, '5')) : setNum1(appendDigit(num1, '5'));
  };

  const setSix = () => {
    op ? setNum2(appendDigit(num2, '6')) : setNum1(appendDigit(num1, '6'));
  };

  const setSeven = () => {
    op ? setNum2(appendDigit(num2, '7')) : setNum1(appendDigit(num1, '7'));
  };

  const setEight = () => {
    op ? setNum2(appendDigit(num2, '8')) : setNum1(appendDigit(num1, '8'));
  };

  const setNine = () => {
    op ? setNum2(appendDigit(num2, '9')) : setNum1(appendDigit(num1, '9'));
  };

  const handleCalculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      switch (op) {
        case '/':
          setResult(parsedNum1 / parsedNum2);
          break;
        case 'x':
          setResult(parsedNum1 * parsedNum2);
          break;
        case '+':
          setResult(parsedNum1 + parsedNum2);
          break;
        case '-':
          setResult(parsedNum1 - parsedNum2);
          break;
        case '%':
          setResult(parsedNum1 % parsedNum2);
          break;
        default:
          break;
      }
    }
  };


  return (
    <View style={styles.MainContainer}>


      {result == ''
        ?
        <View style={styles.showComputation}>
          <Text style={{ color: 'black', fontSize: 40 }}>{num1}</Text>
          <Text style={{ color: 'black', fontSize: 30 }}>{op}</Text>
          <Text style={{ color: 'black', fontSize: 40 }}>{num2}</Text>
        </View>
        :
        <View style={styles.showComputation}>
          <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold' }}>{result}</Text>
        </View>

      }




      <View style={styles.ButtonsContainer}>

        <View style={styles.Row1}>

          <TouchableOpacity onPress={() => clearAll()}>

            <Text style={styles.buttonOp}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOp('/')}>
            <Icon name="divide" size={35} color="black" style={[styles.buttonOp, { marginTop: 10 }]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOp('x')}>
            <Text style={styles.buttonOp}>x</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => removeItem()}>
            <MaterialIcons name="highlight-remove" size={40} color="black" style={[styles.buttonOp, { marginTop: 10 }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.Row2}>
          <TouchableOpacity onPress={() => setSeven()}>

            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEight()} >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setNine()}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOp('-')}>
            <Text style={styles.buttonOp}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Row3}>
          <TouchableOpacity onPress={() => setFour()}>

            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFive()}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSix()}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOp('+')}>
            <Text style={styles.buttonOp}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.EqualbtnAndrow4and5}>
          <View style={styles.row4and5}>
            <View style={styles.Row4}>

              <TouchableOpacity onPress={() => setOne()}>

                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setTwo()}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setThree()}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.Row5}>
              <TouchableOpacity onPress={() => setOp('%')}>

                <Text style={styles.buttonText}>%</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setZero()}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setPoint()}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>

            </View>
          </View>


          <TouchableOpacity style={styles.Equalbutton} onPress={() => handleCalculate()}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
              =
            </Text>
          </TouchableOpacity>



        </View>


      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderTopColor: 'black',
    elevation: 2


  },
  Row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Row2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Row3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Row4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  Row5: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  row4and5: {
    flex: 1,
    justifyContent: 'space-evenly'

  },
  EqualbtnAndrow4and5: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonOp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue'
  },
  Equalbutton: {
    height: 93,
    width: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    marginRight: 35
  },
  showComputation: {

    height: 100,
    width: '100%',
    position: 'absolute',
    marginTop: 262,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }


});

export default App;
