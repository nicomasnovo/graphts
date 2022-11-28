"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookTypeDefs = void 0;
exports.bookTypeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
