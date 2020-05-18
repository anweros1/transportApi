import {DefaultCrudRepository} from '@loopback/repository';
import {Categorie, CategorieRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategorieRepository extends DefaultCrudRepository<
  Categorie,
  typeof Categorie.prototype.id,
  CategorieRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Categorie, dataSource);
  }
}
