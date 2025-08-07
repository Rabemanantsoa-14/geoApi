"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeometrieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_geometrie_dto_1 = require("./create-geometrie.dto");
class UpdateGeometrieDto extends (0, mapped_types_1.PartialType)(create_geometrie_dto_1.CreateGeometrieDto) {
}
exports.UpdateGeometrieDto = UpdateGeometrieDto;
//# sourceMappingURL=update-geometrie.dto.js.map