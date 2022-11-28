"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const typedefs_1 = require("./Books/typedefs");
const typedefs_2 = require("./Movies/typedefs");
const typedefs_3 = require("./Query/typedefs");
exports.typeDefs = [typedefs_3.querySchema, typedefs_1.bookTypeDefs, typedefs_2.moviesSchema];