import uniqueId from 'lodash/uniqueId';
import { observable, action, computed } from 'mobx';

export default class Item {
  id;
  store;
  @observable value;
  @observable packed;

  constructor({ value, id = uniqueId(), packed = false }, store) {
    this.id = id;
    this.value = value;
    this.packed = false;
    this.store = store;
  }

  @computed get unpacked() {
    return !this.packed;
  }

  @action.bound toggle() {
    this.packed = !this.packed;
  }

  @action.bound remove() {
    this.store.removeItem(this);
  }
}
