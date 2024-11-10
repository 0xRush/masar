import { Controller, Get, Post , Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/sum')
  getTotalsum(@Body('num1') number1:number , @Body('num2') number2: number){
    const total = this.appService.findSum(number1,number2);
    return {total : total};
  }
}
