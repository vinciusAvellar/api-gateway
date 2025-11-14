"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const caronas_service_1 = require("./caronas/caronas.service");
const caronas_controller_1 = require("./caronas/caronas.controller");
const usuarios_service_1 = require("./usuarios/usuarios.service");
const usuarios_controller_1 = require("./usuarios/usuarios.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICE_CARONAS',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3001,
                    },
                },
                {
                    name: 'SERVICE_USUARIOS',
                    transport: microservices_1.Transport.TCP,
                    options: { host: '127.0.0.1', port: 3000 },
                },
            ]),
        ],
        controllers: [caronas_controller_1.CaronasController, usuarios_controller_1.UsuariosController],
        providers: [caronas_service_1.CaronasGatewayService, usuarios_service_1.UsuariosGatewayService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map