import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { MaxWord, ProcessFileResponse } from './types';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
      ],
    }).compile();
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMaxWord', () => {
    let file: string;
    let maxWord: MaxWord ;
    beforeEach(async () => {
      file ="Why Beer Is Better Than Jesus\nNo one will kill you for not drinking Beer.\nBeer doesn't tell you how to have sex.\n\n"
    });

    test('should return the right max word', () => {
      maxWord =  service.getMaxWord(file);
      expect(maxWord).toEqual({
        "word": "Beer",
        "count": 3
    })
    });
  })


  describe('ProcessFile', () => {
    let file: string;
    let response: ProcessFileResponse;
    beforeEach(async () => {
      file ="Why Beer Is Better Than Jesus\nNo one will kill you for not drinking Beer.\nBeer doesn't tell you how to have sex.\n\n"
    });

    test('should return the right response', async () => {
      response = await service.processFile(file);
      const  responseData: ProcessFileResponse= {
        fileText: "Why Beer Is Better Than Jesus\nNo one will kill you for not drinking Beer.\nBeer doesn't tell you how to have sex.\n\n",
        newText: "Why fooBeerbar Is Better Than Jesus\nNo one will kill you for not drinking fooBeerbar.\nfooBeerbar doesn't tell you how to have sex.\n\n",
        maxWord: {
            "word": "Beer",
            "count": 3
        }
      }
      expect(response).toEqual(responseData);
    });
  });

})
