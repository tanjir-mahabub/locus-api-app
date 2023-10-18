import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './user/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userSeeder = app.get(SeederService);

  await userSeeder.seedUsers();

  await app.listen(process.env.APP_PORT);
}
bootstrap();
