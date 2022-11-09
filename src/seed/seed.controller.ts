import { Controller, Get } from '@nestjs/common';

import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {

  constructor(private readonly seedService: SeedService) {}

  @Get()
  runSeed(): IResponse {
    return {
      status: 200,
      data: this.seedService.populateDB(),
    };
  }

}
