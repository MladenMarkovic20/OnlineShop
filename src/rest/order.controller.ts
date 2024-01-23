/* eslint-disable import/no-unresolved */
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from '@shop-domain/services/order.service';

@ApiTags('ORDERS')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getHello() {
    return await this.orderService.getOrders();
  }
}
