import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('Home')
  getHello() {
    return {message: 'Learing NestJS!'}
  }

  @Get('/about')
  @Render('About')
  getAbout() {
    
  }

}
