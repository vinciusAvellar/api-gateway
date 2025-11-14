import { CaronasGatewayService } from './caronas.service';
import { CreateCaronaDto } from './caronas.dto';
export declare class CaronasController {
    private readonly caronasService;
    constructor(caronasService: CaronasGatewayService);
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    create(dto: CreateCaronaDto): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
