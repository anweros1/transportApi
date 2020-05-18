import {DefaultCrudRepository} from '@loopback/repository';
import {Article, ArticleRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype.id,
  ArticleRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Article, dataSource);
  }
}
