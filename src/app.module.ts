import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CaronasGatewayService } from './caronas/caronas.service';
import { CaronasController } from './caronas/caronas.controller';
import { UsuariosGatewayService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';

@Module({
  imports: [
    // Registro dos Clientes TCP (onde estão os Microservices)
    ClientsModule.register([
      {
        name: 'SERVICE_CARONAS', // Token usado para injetar o cliente
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001, // Porta TCP do MS Caronas
        },
      },
      {
        name: 'SERVICE_USUARIOS', // Token de Injeção
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3000 }, // Porta TCP do MS Usuários
      },
      // Registrar outros microservices (USUÁRIOS, etc.) aqui
    ]),
  ],
  controllers: [CaronasController, UsuariosController],
  providers: [CaronasGatewayService, UsuariosGatewayService],
})
export class AppModule {}
