const link = document.getElementById("song"); // use "song" not "link"
const songs = [
  'https://open.spotify.com/track/3LpnzPxkMI6XS4JCbhNeek',
  'https://open.spotify.com/track/7onZt6rwGCpCO17LkW1R0A',
  'https://open.spotify.com/track/1jKR8BSa8nYBQwfFR1z6GH',
  'https://open.spotify.com/track/6ehS10NvLG8VH0KQxo8Ji7',
  'https://open.spotify.com/track/7GuLQiPvQbfzP0kqcvgIQQ',
  'https://open.spotify.com/track/5b8WcvxD3oLBxV1oJQmhgy',
  'https://open.spotify.com/track/6VekqQih8fJTHOsoSL01th',
  'https://open.spotify.com/track/6OO9UaqdoqA35o4WpGAerZ',
  'https://open.spotify.com/track/3vg1hUbuXobqVajz2kBM9Y',
  'https://open.spotify.com/track/2EYnvZoSEkwiC8ynBcjLyi',
  'https://open.spotify.com/track/2O5I6ONC8lrNu6wsxmmHSk',
  'https://open.spotify.com/track/2RZlgvQasR4X3gglKV4vuP',
  'https://open.spotify.com/track/3uKFpfwrIAlXLwP123Zrzx',
  'https://open.spotify.com/track/1E3q9qk5fEqvVFQqfCgyQA',
  'https://open.spotify.com/track/7HqagrQgVK0O13sImyTHZP',
  'https://open.spotify.com/track/0sqE6XPi9VAaWl5NxDyMQK'
];

const randomItem = songs[Math.floor(Math.random() * songs.length)];

link.href = randomItem;
