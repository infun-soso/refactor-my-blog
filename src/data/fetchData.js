
export const getPosts = () => fetch('/api/posts').then(response => response.json())
