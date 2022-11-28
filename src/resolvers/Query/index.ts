import booksResolvers from './Books';
import moviesResolvers from './Movies';

export default {
  Query: {
    ...moviesResolvers,
    ...booksResolvers,
  },
};
