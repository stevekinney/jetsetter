import uniqueId from 'lodash/uniqueId';
import { observable, action, computed } from 'mobx';

import Api from '../lib/api';

export default class Item {
  id;
  store;
  @observable value;
  @observable packed;

  constructor({ value, id = uniqueId(), packed = false }, store) {
    this.id = id;
    this.value = value;
    this.packed = packed;
    this.store = store;
  }

  @computed
  get unpacked() {
    return !this.packed;
  }

  @action.bound
  async toggle() {
    const item = this.toJS();
    const packed = !item.packed;
    await Api.update({ ...item, packed });
    this.packed = packed;
  }

  @action.bound
  async markUnpacked() {
    const item = this.toJS();
    await Api.update({ ...item, packed: false });
    this.packed = false;
  }

  @action.bound
  async remove() {
    await Api.delete(this.toJS());
    this.store.removeItem(this);
  }

  toJS() {
    return {
      id: this.id,
      value: this.value,
      packed: this.packed,
    };
  }
}
