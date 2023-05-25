exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subjects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        { id: 1, name: 'My Dog' },
        { id: 2, name: 'Pierce the Veil' },
        { id: 3, name: 'Bunnings' },
        { id: 4, name: 'Lord of the Rings' },
        { id: 5, name: 'A todo app' },
        { id: 6, name: 'A craft shop' },
        { id: 7, name: 'A concert scheduler' },
        { id: 8, name: 'Twilight' },
        { id: 9, name: 'A bar' },
        { id: 10, name: 'A ren faire' },
        { id: 11, name: 'A wedding register' },
        { id: 12, name: 'A class register' },
        { id: 13, name: 'An exercise timer' },
        { id: 14, name: 'A calculator' },
        { id: 15, name: 'My garden' },
        { id: 16, name: 'An information site' },
        { id: 17, name: 'Green Day' },
        { id: 18, name: 'A haunted house' },
        { id: 19, name: 'A cup of coffee' },
        { id: 20, name: 'A magical forest' },
        { id: 21, name: 'A pizza takeaway' },
        { id: 22, name: 'A review site' },
        { id: 23, name: 'Auckland' },
        { id: 24, name: 'Kiwi' },
        { id: 25, name: 'Coding' },
        { id: 26, name: 'Gardening' },
        { id: 27, name: 'Ghost' },
        { id: 28, name: 'A weather app' },
        { id: 29, name: 'The early 2000s' },
        { id: 30, name: 'A diary' },
      ])
    })
}
