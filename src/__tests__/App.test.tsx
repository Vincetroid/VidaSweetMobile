const add = (a: number, b: number) => {
  return (a + b) as Number;
};

it('First test', () => {
  expect(add(1, 2)).toBe(3);
});
