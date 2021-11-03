function test(name) {
  return function () {
    console.log(this);
  };
}

test('janney');
