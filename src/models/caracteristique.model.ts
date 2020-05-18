import {Entity, model, property} from '@loopback/repository';

@model()
export class Caracteristique extends Entity {
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
    type: 'string',
    required: true,
  })
  valeur: string;

  @property({
    type: 'number',
  })
  article_id?: number;

  @property({
    type: 'number',
  })
  categorie_id?: number;


  constructor(data?: Partial<Caracteristique>) {
    super(data);
  }
}

export interface CaracteristiqueRelations {
  // describe navigational properties here
}

export type CaracteristiqueWithRelations = Caracteristique & CaracteristiqueRelations;
