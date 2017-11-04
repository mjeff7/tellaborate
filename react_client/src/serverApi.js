export const fetchStories = () =>
  fetch('/api/profile').then(
    res => (res != null ? res.json() : console.error('Fetch error') || [])
  );
export const fetchStory = id =>
  fetchStories()
    .then(result => result.filter(story => story.id === id))
    .then(result => (result.length === 1 ? result[0] : null));
