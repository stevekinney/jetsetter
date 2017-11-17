import { observable, computed, action } from 'mobx';
import Item from './item';

export default class ItemList {
  @observable items = [];

  @computed get packedItems() {
    return this.items.filter(item => item.packed);
  }

  @computed get unpackedItems() {
    return this.items.filter(item => item.unpacked);
  }

  @action.bound addItem(item) {
    this.items.push(new Item(item), this);
  }

  @action.bound removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  }
}
