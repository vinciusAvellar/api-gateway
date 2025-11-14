import { Injectable, Inject, OnModuleInit } from '@nestjs/common'; // Importar OnModuleInit
import { ClientProxy } from '@nestjs/microservices';
import { CreateCaronaDto } from './caronas.dto';

@Injectable()
export class CaronasGatewayService implements OnModuleInit {
  constructor(
    @Inject('SERVICE_CARONAS')
    private readonly clientServiceCaronas: ClientProxy,
  ) {}

  // Adiciona um gancho que é executado após a inicialização do módulo,
  // garantindo que o cliente TCP tente se conectar antes de enviar mensagens.
  async onModuleInit() {
    try {
      await this.clientServiceCaronas.connect();
      console.log('Cliente TCP Caronas conectado com sucesso.');
    } catch (e) {
      console.error('Falha ao conectar cliente TCP Caronas:', e.message);
      // O erro 'ECONNREFUSED' seria tratado aqui.
    }
  }

  // Envia o comando TCP para o Microservice Caronas
  findAllCaronas() {
    const pattern = { cmd: 'caronas.findAll' };
    const payload = {};

    // O .send() retorna um Observable que o NestJS converte em Promise/JSON HTTP
    return this.clientServiceCaronas.send(pattern, payload);
  }

  // Exemplo: FindOne
  findOneCarona(id: number) {
    const pattern = { cmd: 'caronas.findOne' };
    return this.clientServiceCaronas.send(pattern, id);
  }

  // 3. CREATE (NOVO)
  createCarona(dto: CreateCaronaDto) {
    const pattern = { cmd: 'caronas.create' };
    // O payload é o DTO completo, que será usado pelo Use Case do MS
    return this.clientServiceCaronas.send(pattern, dto);
  }

  // 4. DELETE (NOVO)
  removeCarona(id: number) {
    const pattern = { cmd: 'caronas.remove' };
    // O payload é o ID do recurso a ser removido
    return this.clientServiceCaronas.send(pattern, id);
  }
}
