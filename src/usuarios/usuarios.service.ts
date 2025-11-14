import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// Assumindo que você tem um DTO de criação para Usuários
import { CreateUserDto } from './usuarios.dto';
import { UpdateUserDto } from './usuarios-update.dto';

@Injectable()
export class UsuariosGatewayService implements OnModuleInit {
  constructor(
    @Inject('SERVICE_USUARIOS')
    private readonly clientServiceUsuarios: ClientProxy,
  ) {}

  async onModuleInit() {
    try {
      await this.clientServiceUsuarios.connect();
      console.log('Cliente TCP Usuários conectado com sucesso.');
    } catch (e) {
      console.error('Falha ao conectar cliente TCP Usuários:', e.message);
    }
  }

  // 1. CREATE (POST /usuarios)
  createUsuario(dto: CreateUserDto) {
    return this.clientServiceUsuarios.send({ cmd: 'usuarios.create' }, dto);
  }

  // 2. READ ALL (GET /usuarios)
  findAllUsuarios() {
    return this.clientServiceUsuarios.send({ cmd: 'usuarios.findAll' }, {});
  }

  // 3. READ ONE (GET /usuarios/:id)
  findOneUsuario(id: string) {
    // MongoDB IDs são strings, então enviamos o ID como string
    return this.clientServiceUsuarios.send({ cmd: 'usuarios.findOne' }, id);
  }

  // 4. UPDATE (PATCH /usuarios/:id)
  updateUsuario(id: string, dto: UpdateUserDto) {
    // Empacota o ID e o DTO em um único payload, como o handler do MS espera
    return this.clientServiceUsuarios.send(
      { cmd: 'usuarios.update' },
      { id, dto },
    );
  }

  // 5. DELETE (DELETE /usuarios/:id)
  removeUsuario(id: string) {
    return this.clientServiceUsuarios.send({ cmd: 'usuarios.remove' }, id);
  }
}
