import { OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCaronaDto } from './caronas.dto';
export declare class CaronasGatewayService implements OnModuleInit {
    private readonly clientServiceCaronas;
    constructor(clientServiceCaronas: ClientProxy);
    onModuleInit(): Promise<void>;
    findAllCaronas(): import("rxjs").Observable<any>;
    findOneCarona(id: number): import("rxjs").Observable<any>;
    createCarona(dto: CreateCaronaDto): import("rxjs").Observable<any>;
    removeCarona(id: number): import("rxjs").Observable<any>;
}
