export const fetchStories = () => fetch('/api/profile').then(res => res.json());
export const fetchStory = id =>
  fetchStories()
    .then(result => result.stories)
    .then(result => result.filter(story => story.id === id))
    .then(result => (result.length === 1 ? result[0] : null));
