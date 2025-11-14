import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CaronasGatewayService } from './caronas.service';
import { CreateCaronaDto } from './caronas.dto';

// O Gateway expõe a rota HTTP /caronas
@Controller('caronas')
export class CaronasController {
  constructor(private readonly caronasService: CaronasGatewayService) {}

  @Get()
  findAll() {
    // Rota pública GET /caronas
    return this.caronasService.findAllCaronas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Rota pública GET /caronas/:id
    return this.caronasService.findOneCarona(+id);
  }

  @Post()
  create(@Body() dto: CreateCaronaDto) {
    // Envia o comando TCP 'caronas.create' com o DTO como payload
    return this.caronasService.createCarona(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Envia o comando TCP 'caronas.remove' com o ID
    return this.caronasService.removeCarona(+id);
  }
}
