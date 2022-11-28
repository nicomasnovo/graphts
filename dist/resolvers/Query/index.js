"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Books_1 = __importDefault(require("./Books"));
const Movies_1 = __importDefault(require("./Movies"));
exports.default = {
    Query: {
        healthcheck: () => 'Ok',
        ...Movies_1.default,
        ...Books_1.default,
    },
};
