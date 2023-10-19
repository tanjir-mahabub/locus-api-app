import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Locus API')
    .setDescription('Locus API description')
    .setVersion('1.0')
    .addTag('locus')
    .build()
