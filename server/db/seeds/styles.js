exports.seed = function (knex) {
  return knex('styles')
    .del()
    .then(function () {
      return knex('styles').insert([
        { id: 1, name: 'An emo blog' },
        { id: 2, name: 'A horse girl tumblr' },
        { id: 3, name: 'A 90s website' },
        { id: 4, name: 'Neo-memphis' },
        { id: 5, name: 'A SaaS landing page' },
        { id: 6, name: 'Flashcards' },
        { id: 7, name: 'A free wordpress theme' },
        { id: 8, name: 'A cooking blog' },
        { id: 9, name: 'A broswer game' },
        { id: 10, name: 'A video game marketing site' },
        { id: 11, name: 'A travel site' },
        { id: 12, name: 'An etsy' },
        { id: 13, name: 'An app' },
        { id: 14, name: 'A social media site' },
        { id: 15, name: 'A whiteboard' },
        { id: 16, name: 'Documentation' },
        { id: 17, name: 'pastel colors' },
        { id: 18, name: 'A cute blog' },
        { id: 19, name: 'A coffee shop site' },
        { id: 20, name: 'Wikipedia' },
        { id: 21, name: 'A todo app' },
        { id: 22, name: 'Spotify' },
        { id: 23, name: 'A dating app' },
        { id: 24, name: 'A pomodoro timer' },
        { id: 25, name: 'A finance bro podcast' },
        { id: 26, name: 'A hardware store' },
        { id: 27, name: 'A portfolio' },
        { id: 28, name: 'A whackamole game' },
        { id: 29, name: 'A dress up game' },
        { id: 30, name: 'A CLI' },
      ])
    })
}
