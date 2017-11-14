import { observable, computed, action } from 'mobx';
import Item from './ItemModel';

import Api from '../lib/api';

export default class ItemStore {
  @observable items = [];
  @observable unpackedItemsFilter = '';
  @observable packedItemsFilter = '';

  constructor() {
    Api.getAll().then(items => {
      console.log(items);
      this.items = items.map(item => new Item(item, this));
    });
  }

  @computed get packedItems() {
    return this.items.filter(item => item.packed);
  }

  @computed get unpackedItems() {
    return this.items.filter(item => item.unpacked)
  }

  @computed get filteredUnpackedItems() {
    return this.unpackedItems.filter(item => item.value.includes(this.unpackedItemsFilter));
  }

  @computed get filteredPackedItems() {
    return this.packedItems.filter(item => item.value.includes(this.packedItemsFilter));
  }

  @computed get packedItemsLength() {
    return this.packedItems.length;
  }

  @computed get unpackedItemsLength() {
    return this.unpackedItems.length;
  }

  @action.bound async addItem(newItem) {
    const item = await Api.add(newItem);
    this.items.push(new Item(item, this));
  }

  @action.bound removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  }

  @action.bound updatePackedItemsFilter(value) {
    this.packedItemsFilter = value;
  }

  @action.bound updateUnpackedItemsFilter(value) {
    this.unpackedItemsFilter = value;
  }

  @action.bound markAllAsUnpacked() {
    this.items.forEach(item => item.toggle(false));
  }
}
