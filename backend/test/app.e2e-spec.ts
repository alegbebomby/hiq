import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });
  it('/upload (POST)', () => {
    const filePath = `${__dirname}/testFiles/test.pdf`;
    const response= {
      fileText: "Why Beer Is Better Than Jesus\nNo one will kill you for not drinking Beer.\nBeer doesn't tell you how to have sex.\n\n",
      newText: "Why fooBeerbar Is Better Than Jesus\nNo one will kill you for not drinking fooBeerbar.\nfooBeerbar doesn't tell you how to have sex.\n\n",
      maxWord: {
          "word": "Beer",
          "count": 3
      }
  }
    return request(app.getHttpServer())
      .post('/upload')
      .attach('file', filePath)
      .expect(200)
      .expect(response);
  });
});
