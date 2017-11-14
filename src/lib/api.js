import localforage from 'localforage';

window.localforage = localforage;

const getAll = async () => {
  const items = await localforage.getItem('items');
  if (!items) await localforage.setItem('items', []);
  return items || [];
};

export default {
  async add(item) {
    const items = await getAll();
    const newItem = { ...item, id: Date.now() };
    localforage.setItem('items', [...items, newItem]);
    return newItem;
  },

  async getAll() {
    return await getAll();
  },

  async delete({ id }) {
    const items = await getAll();
    localforage.setItem('items', items.filter(item => item.id !== id));
  },

  async update(updatedItem) {
    const items = await getAll();
    localforage.setItem(
      'items',
      items.map(item => {
        if (item.id === updatedItem.id) return { ...item, ...updatedItem };
        return item;
      }),
    );
  },

  async markAllAsUnpacked() {
    const items = await getAll();
    localforage.setItem(
      'items',
      items.map(item => ({ ...item, packed: false })),
    );
  },

  async deleteUnpackedItems() {
    const items = await getAll();
    localforage.setItem('items', items.filter(({ packed }) => packed));
  },
};
