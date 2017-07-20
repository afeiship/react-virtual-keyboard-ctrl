import './dev.scss';
import {ReactVirtualKeyboardCtrl} from './main';

/*===example start===*/

// install: npm install afeiship/react-virtual-keyboard-ctrl --save
// import : import ReactVirtualKeyboardCtrl from 'react-virtual-keyboard-ctrl'

class App extends React.Component{
  state = {
    value1:'111',
    value2:'222',
    value3:'333',
    value4:'444',
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
      value:this.state.value1,
      onChange: (inEvent)=>{
        const {value} = inEvent.target;
        this.setState({value1: value},()=>{
          console.log(this.state)
        })
      },
      onHidden:()=>{
        console.log('on hidden..');
      },
      onDocClick: ()=>{
        console.log('on drop click...');
      }
    }).then(()=>{
      console.log('shown.');
    })
  };

  _click1_2 = e =>{
    ReactVirtualKeyboardCtrl.show({
      value:this.state.value2,
      type:'identity',
      onChange: (inEvent)=>{
        const {value} = inEvent.target;
        this.setState({value2: value},()=>{
          console.log(this.state)
        })
      },
    })
  };


  _click1_3 = e =>{
    ReactVirtualKeyboardCtrl.show({
      type:'number',
      value:this.state.value3,
      onChange: (inEvent)=>{
        const {value} = inEvent.target;
        this.setState({value3: value},()=>{
          console.log(this.state)
        })
      },
    })
  };


  _click1_4 = e =>{
    ReactVirtualKeyboardCtrl.show({
      type:'currency',
      value:this.state.value4,
      onChange: (inEvent)=>{
        const {value} = inEvent.target;
        this.setState({value4: value},()=>{
          console.log(this.state)
        })
      },
    })
  };


  _click2 = e =>{
    ReactVirtualKeyboardCtrl.hide();
  };

  _click = e =>{
    console.log('click!!!');
  };

  render(){
    return (
      <div className="hello-react-virtual-keyboard-ctrl">
        <button onClick={this._click1_1}>Show - default</button>
        <button onClick={this._click1_2}>Show - identity</button>
        <button onClick={this._click1_3}>Show - number</button>
        <button onClick={this._click1_4}>Show - currency</button>
        <button onClick={this._click}>Test click</button>
        <button onClick={this._click2}>Hide</button>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
