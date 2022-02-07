function zipList(one, two) {
  const mix = [];
  for (let i = 0; i < one.length; i++) {
    mix.push(one[i]);
    mix.push(two[i]);
  }
  return mix;
}
const one = ['a', 'b', 'c'];
const two = [1, 2, 3];
console.log(zipList(one, two));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listOne, listTwo));
}
console.log(zipListTheSimpleWay(one, two));
