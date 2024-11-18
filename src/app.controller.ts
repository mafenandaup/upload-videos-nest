import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Bem Vindo ao Projeto Upload de Vídeo';
  }
}
