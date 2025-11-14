"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosGatewayService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let UsuariosGatewayService = class UsuariosGatewayService {
    clientServiceUsuarios;
    constructor(clientServiceUsuarios) {
        this.clientServiceUsuarios = clientServiceUsuarios;
    }
    async onModuleInit() {
        try {
            await this.clientServiceUsuarios.connect();
            console.log('Cliente TCP Usuários conectado com sucesso.');
        }
        catch (e) {
            console.error('Falha ao conectar cliente TCP Usuários:', e.message);
        }
    }
    createUsuario(dto) {
        return this.clientServiceUsuarios.send({ cmd: 'usuarios.create' }, dto);
    }
    findAllUsuarios() {
        return this.clientServiceUsuarios.send({ cmd: 'usuarios.findAll' }, {});
    }
    findOneUsuario(id) {
        return this.clientServiceUsuarios.send({ cmd: 'usuarios.findOne' }, id);
    }
    updateUsuario(id, dto) {
        return this.clientServiceUsuarios.send({ cmd: 'usuarios.update' }, { id, dto });
    }
    removeUsuario(id) {
        return this.clientServiceUsuarios.send({ cmd: 'usuarios.remove' }, id);
    }
};
exports.UsuariosGatewayService = UsuariosGatewayService;
exports.UsuariosGatewayService = UsuariosGatewayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICE_USUARIOS')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UsuariosGatewayService);
//# sourceMappingURL=usuarios.service.js.map