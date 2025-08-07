// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Utiliser le port de Render si défini, sinon 3000 en local
  const port = process.env.PORT || 3000;

  await app.listen(port);
  console.log(`Application démarrée sur le port ${port}`);
}

bootstrap();
