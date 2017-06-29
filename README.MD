# react-virtual-keyboard-ctrl
> React virtual keyboard controller.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onDropClick: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
    type: PropTypes.oneOf([
      'blank',
      'identity',
      'tel',
      'number',
      'currency'
    ])
  };

  static defaultProps = {
    type:'blank',
    value:[],
    maxLength:Number.MAX_VALUE,
    onChange: noop,
    onDropClick: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-virtual-keyboard-ctrl --save
// import : import ReactVirtualKeyboardCtrl from 'react-virtual-keyboard-ctrl'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  componentDidMount() {
    ReactVirtualKeyboardCtrl.createInstance();
  }

  _click1_1 = e =>{
    ReactVirtualKeyboardCtrl.show({
      maxLength:10,
      value:'1',
      onChange: (inEvent)=>{
        const {value} = inEvent.target;
        console.log(value);
      },
      onDropClick: ()=>{
        console.log('on drop click...');
      }
    })
  };

  _click1_2 = e =>{
    ReactVirtualKeyboardCtrl.show({
      type:'identity'
    })
  };


  _click1_4 = e =>{
    ReactVirtualKeyboardCtrl.show({
      type:'number'
    })
  };


  _click1_5 = e =>{
    ReactVirtualKeyboardCtrl.show({
      type:'currency'
    })
  };


  _click2 = e =>{
    ReactVirtualKeyboardCtrl.hide();
  };

  render(){
    return (
      <div className="hello-react-virtual-keyboard-ctrl">
        <button onClick={this._click1_1}>Show - default</button>
        <button onClick={this._click1_2}>Show - identity</button>
        <button onClick={this._click1_4}>Show - number</button>
        <button onClick={this._click1_5}>Show - currency</button>
        <button onClick={this._click2}>Hide</button>
      </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

