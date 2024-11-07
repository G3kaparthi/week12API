import {DefaultCrudRepository} from '@loopback/repository';
import {Product, ProductRelations} from '../models';
import {MySqlDataSource} from '../datasources';   
import {inject} from '@loopback/core';


export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.ID,
  ProductRelations
> {
  constructor(
    @inject('datasources.mysql')   
 dataSource: MySqlDataSource,
  ) {
    super(Product, dataSource);   

  }
}