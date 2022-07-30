import { Controller, Get, Req } from '@nestjs/common';

@Controller('dummy')
export class DummyController {
  // eslint-disable-next-line class-methods-use-this
  @Get()
  public findAll$(@Req() req: any): string {
    console.log(req.socket);

    return 'test';
  }
}
