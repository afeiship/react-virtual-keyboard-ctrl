import ReactVirtualKeyboard from 'components/react-virtual-keyboard';

export default class {
  static _instance = null;

  static createInstance(inProps){
    this._instance = this._instance || ReactVirtualKeyboard.newInstance(inProps);
    return this._instance;
  };

  static show(inProps){
    return this._instance.component.show(inProps);
  };

  static hide(){
    return this._instance.component.hide();
  };

  static update(inProps){
    return this._instance.component.update(inProps);
  };

  static destroy(){
    if(this._instance){
      this._instance.destroy();
      this._instance = null;
    }
  };
}
