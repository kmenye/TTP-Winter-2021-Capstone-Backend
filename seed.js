const db = require('./db');
const Players = require('./db/models').Player;
const Items = require('./db/models').Item;

const seedPlayers = [
  { firstName: 'Bilbo', lastName: 'Baggins', jerseyNumber: 11 },
  { firstName: 'Harry', lastName: 'Potter', jerseyNumber: 22 },
  { firstName: 'Lucifer', lastName: 'Morningstart', jerseyNumber: 666 },
];

const seedItems = [
  {type:  'electronics', item:  'battery', Quantity:  '5'},
  {type:  'electronics', item:  'engine', Quantity:  '2'},
  {type:  'compost', item:  'a whole ass tree', Quantity:  '1'}
]

const seedP = () => {
  return Players.bulkCreate(seedPlayers);
};

const seedI = () => {
  return Items.bulkCreate(seedItems);
};


seedI().then(() => process.exit());
seedP().then(() => process.exit());
