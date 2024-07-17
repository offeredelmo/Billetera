"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeudaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_deuda_dto_1 = require("./create-deuda.dto");
class UpdateDeudaDto extends (0, mapped_types_1.PartialType)(create_deuda_dto_1.CreateDeudaDto) {
}
exports.UpdateDeudaDto = UpdateDeudaDto;
//# sourceMappingURL=update-deuda.dto.js.map