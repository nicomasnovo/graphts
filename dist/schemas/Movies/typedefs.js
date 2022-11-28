"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesSchema = void 0;
exports.moviesSchema = `
  type Movie {
    title: String
    author: String
  }

  type Query {
    movies: [Movie]
  }
`;
