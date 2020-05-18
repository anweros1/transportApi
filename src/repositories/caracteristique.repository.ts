import {DefaultCrudRepository} from '@loopback/repository';
import {Caracteristique, CaracteristiqueRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CaracteristiqueRepository extends DefaultCrudRepository<
  Caracteristique,
  typeof Caracteristique.prototype.id,
  CaracteristiqueRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Caracteristique, dataSource);
  }
}
