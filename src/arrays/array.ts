class CustomArray<T extends unknown> {
  private items: T[] = [];

  constructor(private arrayCapacity: number = 2) {}

  public size() {
    return this.items.length;
  }

  public get capacity() {
    return this.arrayCapacity;
  }

  public set capacity(newCapacity: number) {
    if (this.items.length > newCapacity) {
      this.items = this.items.slice(0, newCapacity);
    }
    this.arrayCapacity = newCapacity;
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public at(index: number) {
    return this.items[index];
  }

  public push(item: T) {
    const needAllocate = this.items.length === this.capacity;

    if (needAllocate) {
      this.capacity = this.capacity * 2;
    }

    this.items.push(item);
  }

  public insert(index: number, item: T) {}
  public prepend(item: T) {}
  public pop(item: T) {}
  public delete(index: number) {}
  // ищет элементы по значению и удаляет их, даже если их несколько
  public remove(item: T) {}
  // ищет элемент по значению и возвращает индекс первого найденного элемента, возвращает -1 если ничего не найдено
  public find(item: T) {}
}

export default CustomArray;
