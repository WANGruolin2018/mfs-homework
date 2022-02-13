import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser' 
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {"origin": "http://localhost:4200",
 
    "credentials": true,
    
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"}
  );
  app.use(session({
    secret: 'session',
    resave: false,
    cookie: { maxAge: 60000, httpOnly: true },  //以cookie存储到客户端
}))
  await app.listen(3000);
}
bootstrap();
