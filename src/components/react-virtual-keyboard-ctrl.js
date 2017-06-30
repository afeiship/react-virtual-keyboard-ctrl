// import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactPopup from 'react-popup';
import ReactNumberKeyboard,{generator} from 'react-number-keyboard';
import appendToDocument from 'react-append-to-document';


export default class extends PureComponent {
  /*===properties start===*/
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
  /*===properties end===*/

  static _instance = null;
  static newInstance(inProps){
    return appendToDocument(this, inProps,{
      className:'react-virtual-keyboard-container'
    });
  };

  static createInstance(inProps){
    this._instance = this._instance || this.newInstance(inProps);
    return this._instance;
  };

  static show(inProps){
    return this._instance.component.show(inProps);
  };

  static hide(){
    return this._instance.component.hide();
  };

  static destroy(){
    if(this._instance){
      this._instance.destroy();
      this._instance = null;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
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

  show(inProps){
    const { popup } = this.refs;
    const newState = objectAssign({...this.props}, inProps );
    return new Promise((resolve)=>{
      this.setState(newState,()=>{
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
    onChange({
      target:{ value: this.getValue(value) }
    });
  };

  render(){
    const { className, onDropClick, maxLength, ...props } = this.props;
    const { value } = this.state;
    const kbItems = this.kbItems;

    return (
      <ReactPopup data-value={value} ref='popup' {...props}
        onDropClick={this.state.onDropClick}
        className={classNames('react-virtual-keyboard-ctrl',className)}>
        <ReactNumberKeyboard
          onChange={this._onChange}
          maxLength={this.state.maxLength}
          items={ generator(kbItems.key, kbItems.ignore) }
          value={value.slice(0)} />
      </ReactPopup>
    );
  }
}
