import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  message = 'Welcome to api!';

  getData(): { message: string } {
    return { message: this.message };
  }
}
