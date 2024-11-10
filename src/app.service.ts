import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  findSum(num1:number, num2:number):number{
    return Number(num1)+ Number(num2);
  }
}
