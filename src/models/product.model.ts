import {Entity, model, property} from '@loopback/repository';

@model({name: 'products'})  // Explicitly set the table name to 'products'
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,  // Specifies that this is the primary key
    generated: true, // Automatically generates the value for auto_increment
  })
  ID: number;

  @property({
    type: 'string',
    required: true,
    name: 'PRODUCTNAME', // Mapping to the correct column name in DB
  })
  PRODUCTNAME: string;

  @property({
    type: 'number',
    required: true,
    name: 'QUANTITY', // Mapping to the correct column name in DB
  })
  QUANTITY: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
