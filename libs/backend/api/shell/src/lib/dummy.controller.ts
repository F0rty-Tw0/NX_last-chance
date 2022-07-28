import { Controller, Get } from '@nestjs/common';

@Controller('dummy')
export class DummyController {
  // eslint-disable-next-line class-methods-use-this
  @Get()
  public findAll$() {
    return 'test';
  }
}
