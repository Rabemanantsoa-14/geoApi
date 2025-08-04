"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBatimentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_batiment_dto_1 = require("./create-batiment.dto");
class UpdateBatimentDto extends (0, mapped_types_1.PartialType)(create_batiment_dto_1.CreateBatimentDto) {
}
exports.UpdateBatimentDto = UpdateBatimentDto;
//# sourceMappingURL=update-batiment.dto.js.map