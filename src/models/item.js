import uniqueId from 'lodash/uniqueId';
import { observable, action, computed } from 'mobx';

export default class Item {
  id;
  store;
  @observable value;
  @observable packed;

  constructor({ value, id = uniqueId(), packed = false }, list) {
    this.id = id;
    this.value = value;
    this.packed = packed;
    this.list = list;
  }

  @computed get unpacked() {
    return !this.packed;
  }

  @action.bound toggle() {
    return this.packed = !this.packed;
  }

  @action.bound remove() {
    this.list.removeItem(this);
  }
}
