import { Injectable } from '@nestjs/common';
import { MaxWord, ProcessFileResponse } from './types';

@Injectable()
export class AppService {
  
  async processFile(fileText:string):Promise<ProcessFileResponse>{ 
    const maxWord: MaxWord = this.getMaxWord(fileText);
    const wordToReplace = new RegExp(`${maxWord.word}`, 'g');
    const newWord = `foo${maxWord.word}bar`
    const newFile= fileText.replace(wordToReplace,newWord)
    
    const result = { 
      fileText: fileText.toString(),
      newText: newFile.toString(),
      maxWord: maxWord,
    };
    return  result;
  }
  
  getMaxWord(fileText: string): MaxWord {
    const wordCount={}
    const words = fileText.replace(/[.,()\s+]/g, ' ').trim().split(' ').filter(w=> w!='');
    words.forEach(word=>{
        if(word in wordCount){
          wordCount[word] = wordCount[word] +1
        }else{
          wordCount[word] = 1
        }
    });

    let max = 0
    let maxWord= ''
    for(let word in wordCount){
      if(wordCount[word] > max){
        maxWord = word
        max = wordCount[word]
      }
    }
    return {
      word: maxWord,
      count: max
    }
  }
}
