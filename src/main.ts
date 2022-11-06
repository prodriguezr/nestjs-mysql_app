import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const logger = new Logger();

	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('NestJs/MySQL API')
		.setDescription('A short description for this API project')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(process.env.PORT ? Number(process.env.PORT) : 3000);

	logger.log(`Server running at ${await app.getUrl()}`);
}
bootstrap();
