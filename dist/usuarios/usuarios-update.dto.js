"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const usuarios_dto_1 = require("./usuarios.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(usuarios_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=usuarios-update.dto.js.map