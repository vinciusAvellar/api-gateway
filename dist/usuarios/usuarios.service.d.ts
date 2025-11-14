import { OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './usuarios.dto';
import { UpdateUserDto } from './usuarios-update.dto';
export declare class UsuariosGatewayService implements OnModuleInit {
    private readonly clientServiceUsuarios;
    constructor(clientServiceUsuarios: ClientProxy);
    onModuleInit(): Promise<void>;
    createUsuario(dto: CreateUserDto): import("rxjs").Observable<any>;
    findAllUsuarios(): import("rxjs").Observable<any>;
    findOneUsuario(id: string): import("rxjs").Observable<any>;
    updateUsuario(id: string, dto: UpdateUserDto): import("rxjs").Observable<any>;
    removeUsuario(id: string): import("rxjs").Observable<any>;
}
