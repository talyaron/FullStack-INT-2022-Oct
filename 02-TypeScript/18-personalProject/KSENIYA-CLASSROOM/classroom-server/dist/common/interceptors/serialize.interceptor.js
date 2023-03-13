"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = void 0;
const utils_1 = require("../utils");
const operators_1 = require("rxjs/operators");
const common_1 = require("@nestjs/common");
let SerializeInterceptor = class SerializeInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((value) => {
            return !value
                ? {}
                : Array.isArray(value)
                    ? value.map((item) => this.serializeObject(item))
                    : this.serializeObject(value);
        }));
    }
    serializeObject(value) {
        return Object.assign({}, (0, utils_1.serializeSequelize)(value));
    }
};
SerializeInterceptor = __decorate([
    (0, common_1.Injectable)()
], SerializeInterceptor);
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map