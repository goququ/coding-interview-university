import CustomArray from "./array";

describe("Tests for custom Array structure", () => {
  test("size tests", () => {
    const array = new CustomArray<number>();

    expect(array.size()).toBe(0);
    array.push(1);
    expect(array.size()).toBe(1);

    array.push(2);
    array.push(3);
    expect(array.size()).toBe(3);
  });

  test("capacity tests", () => {
    const array = new CustomArray<number>(4);

    expect(array.capacity).toBe(4);

    array.capacity = 1;

    expect(array.capacity).toBe(1);

    array.push(1);
    array.push(2);

    expect(array.capacity).toBe(2);

    array.push(3);

    expect(array.capacity).toBe(4);
  });

  test("isEmpty tests", () => {
    const array = new CustomArray<number>();

    expect(array.isEmpty()).toBe(true);
    array.push(1);
    expect(array.isEmpty()).toBe(false);
  });

  test("at & push tests", () => {
    const array = new CustomArray<number>();

    expect(array.at(0)).toBe(undefined);
    array.push(1);
    expect(array.at(0)).toBe(1);
  });

  test("splice tests", () => {
    const array = new CustomArray<number>();

    array.push(1);
    array.push(2);
    array.push(4);

    [
      [0, 1],
      [1, 2],
      [2, 4],
    ].forEach(([position, value]) => {
      expect(array.at(position)).toBe(value);
    });

    array.insert(2, 3);

    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ].forEach(([position, value]) => {
      expect(array.at(position)).toBe(value);
    });
  });

  test("at & prepend tests", () => {
    const array = new CustomArray<number>();

    array.push(1);
    expect(array.at(0)).toBe(1);

    array.prepend(2);
    expect(array.at(0)).toBe(2);
    expect(array.at(1)).toBe(1);
  });

  test("at & pop tests", () => {
    const array = new CustomArray<number>();

    array.push(1);
    array.push(2);
    expect(array.pop()).toBe(2);
    expect(array.pop()).toBe(1);
  });

  test("at & delete tests", () => {
    const array = new CustomArray<number>();

    array.push(1);
    array.push(2);
    expect(array.size()).toBe(2);

    array.delete(0);
    expect(array.size()).toBe(1);
    expect(array.at(0)).toBe(2);
  });

  test("at & remove tests", () => {
    const array = new CustomArray<number>();

    array.push(1);
    array.push(2);
    array.push(2);
    array.push(2);
    expect(array.size()).toBe(4);

    array.remove(2);
    expect(array.size()).toBe(1);
  });

  test("at & find tests", () => {
    const array = new CustomArray<number>();

    array.push(1);
    array.push(2);
    array.push(3);
    array.push(2);
    expect(array.find(2)).toBe(1);

    array.delete(1);
    expect(array.find(2)).toBe(2);
  });
});
