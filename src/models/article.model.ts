import {Entity, model, property} from '@loopback/repository';

@model()
export class Article extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'number',
  })
  categorie_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  owner_id: number;

  @property({
    type: 'number',
  })
  local_id?: number;


  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
