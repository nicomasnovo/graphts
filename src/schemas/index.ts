import { bookTypeDefs } from './Books/typedefs';
import { moviesSchema } from './Movies/typedefs';
import { querySchema } from './Query/typedefs';

export const typeDefs = [querySchema, bookTypeDefs, moviesSchema];
