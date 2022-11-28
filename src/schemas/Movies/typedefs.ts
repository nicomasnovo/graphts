export const moviesSchema = `
  type Movie {
    title: String
    author: String
  }

  type Query {
    movies: [Movie]
  }
`;
