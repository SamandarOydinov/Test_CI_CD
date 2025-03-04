import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 3003;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`server http://localhost:${PORT} da ishga tushdi`);
  });
}
start();
