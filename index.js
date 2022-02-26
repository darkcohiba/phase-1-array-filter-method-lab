const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

function findMatching(array, str){
    if (str == array.name){
        return array.name;
    }
}

drivers.filter(findMatching(drivers, 'Bobby'))

function fuzzyMatch(array, str){
    if (str === array.name.startsWith(str)){
        return array.name;
    }
}