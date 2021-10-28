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
});
