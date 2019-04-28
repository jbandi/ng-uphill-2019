export function delay1(limit) {

  const array = [];

  for (let i = 0; i <= limit; i++) {
    array[i] = 'Test' + i;
  }

  array.find(e => e.indexOf(limit) > -1);

}
