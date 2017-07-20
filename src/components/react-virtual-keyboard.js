// import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactPopup from 'react-popup';
import ReactNumberKeyboard,{generator} from 'react-number-keyboard';

import TYPES,{items} from './const';
import ReactIosToolbar from 'react-ios-toolbar';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onShown: PropTypes.func,
    onHidden: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
    type: PropTypes.oneOf(TYPES)
  };

  static defaultProps = {
    type:'blank',
    value:[],
    maxLength:Number.MAX_VALUE,
    onChange: noop,
    onShown: noop,
    onHidden: noop,
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  componentWillUnmount() {
    this.hide();
  }

  get kbItems(){
    const {type} = this.state;
    switch(type){
      case 'identity':
        return { key:'X', ignore: false };
      case 'number':
        return { key:'00', ignore: false };
      case 'currency':
        return { key:'.', ignore: false };
      default:
        return { key:'', ignore: true };
    }
  }

  getValue(inValue){
    if(Array.isArray(inValue)){
      const result = inValue.map(item=>item.content);
      return result.join('');
    }
    return inValue;
  }

  update(inProps){
    const newState = objectAssign({...this.props}, inProps );
    return new Promise((resolve)=>{
      this.setState(newState,()=>{
        resolve();
      });
    });
  }

  show(inProps){
    const { popup } = this.refs;
    return new Promise((resolve)=>{
      this.update( inProps ).then(()=>{
        popup.show().then(resolve);
      });
    });
  }

  hide(){
    const { popup } = this.refs;
    return new Promise((resolve,reject)=>{
      popup.hide().then(resolve);
    });
  }

  _onChange = inEvent => {
    const {onChange} = this.state;
    const {value} = inEvent.target;
    const newValue = this.getValue( value );
    onChange({
      target:{ value: newValue }
    });
  };

  _onClick = inEvent => {
    this.hide();
  };

  render(){
    const { className, maxLength,  ...props } = this.props;
    const { value } = this.state;
    const kbItems = this.kbItems;

    return (
      <ReactPopup
        {...props}
        ref='popup'
        backdrop={false}
        className={classNames('react-virtual-keyboard-ctrl',className)}>

        <ReactIosToolbar items={items} onClick={this._onClick} />
        <ReactNumberKeyboard
          onChange={this._onChange}
          maxLength={this.state.maxLength}
          items={ generator(kbItems.key, kbItems.ignore) }
          value={value.slice(0)} />
      </ReactPopup>
    );
  }
}
