import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // Crea un módulo de prueba para el controlador de la aplicación
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Proporciona el controlador que se probará
      providers: [AppService], // Proporciona los servicios necesarios para el controlador
    }).compile(); // Compila el módulo de prueba

    // Obtiene una instancia del controlador de la aplicación
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // Prueba la función getHello del controlador
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
