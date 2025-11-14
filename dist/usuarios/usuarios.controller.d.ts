import { UsuariosGatewayService } from './usuarios.service';
import { CreateUserDto } from './usuarios.dto';
import { UpdateUserDto } from './usuarios-update.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosGatewayService);
    create(dto: CreateUserDto): import("rxjs").Observable<any>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    update(id: string, dto: UpdateUserDto): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
