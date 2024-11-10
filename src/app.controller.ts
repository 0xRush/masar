import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('divide-numbers')
  divideNumbers(@Body('num1') number1: number, @Body('num2') number2: number): any {
    if (Number(number2) === 0) return { error: "can't divide by zero"};
    
    const division = this.appService.divideNumbers(number1, number2);

    return { division };
  }
}
