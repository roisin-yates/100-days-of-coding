exports.seed = function (knex) {
  return knex('wildcards')
    .del()
    .then(function () {
      return knex('wildcards').insert([
        { id: 1, name: 'None' },
        { id: 2, name: 'Must be bulma' },
        { id: 3, name: 'Must be CSS' },
        { id: 4, name: 'Pastel colour-scheme' },
        { id: 5, name: 'Must have a banana' },
        { id: 6, name: 'None' },
        { id: 7, name: 'Must write tests' },
        { id: 8, name: 'None' },
        { id: 9, name: 'Dark colour-scheme' },
        { id: 10, name: 'Must be bulma' },
        { id: 11, name: 'None' },
        { id: 12, name: 'Must have a music player' },
        { id: 13, name: 'Must have a calendar component' },
        { id: 14, name: 'None' },
        { id: 15, name: 'None' },
        { id: 16, name: 'Must not use tailwindCSS' },
        { id: 17, name: 'Must learn a new skill' },
        { id: 18, name: 'None' },
        { id: 19, name: 'Must have a login' },
        { id: 20, name: 'Must pass WAVE' },
        { id: 21, name: 'Must pass WAVE' },
        { id: 22, name: 'None' },
        { id: 23, name: 'Must write tests' },
        { id: 24, name: 'Must write tests' },
        { id: 25, name: 'None' },
        { id: 26, name: 'Must learn a new skill' },
        { id: 27, name: 'Must use CSS' },
        { id: 28, name: 'Must use bulma' },
        { id: 29, name: 'Must use comic sans' },
        { id: 30, name: 'Must pass WAVE' },
      ])
    })
}
