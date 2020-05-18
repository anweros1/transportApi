import {Entity, model, property} from '@loopback/repository';

@model()
export class Categorie extends Entity {
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
  parentcategorie_id?: number;


  constructor(data?: Partial<Categorie>) {
    super(data);
  }
}

export interface CategorieRelations {
  // describe navigational properties here
}

export type CategorieWithRelations = Categorie & CategorieRelations;
