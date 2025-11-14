import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsuariosGatewayService } from './usuarios.service';
import { CreateUserDto } from './usuarios.dto';
import { UpdateUserDto } from './usuarios-update.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosGatewayService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usuariosService.createUsuario(dto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAllUsuarios();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOneUsuario(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usuariosService.updateUsuario(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.removeUsuario(id);
  }
}
