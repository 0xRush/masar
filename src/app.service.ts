import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  divideNumbers(number1: number, number2: number): number {
    const division = Number(number1) / Number(number2);

    return division;

  findSum(num1:number, num2:number):number{
    return Number(num1)+ Number(num2);
  }
}
