import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Caracteristique} from '../models';
import {CaracteristiqueRepository} from '../repositories';

export class CaracteristiqueController {
  constructor(
    @repository(CaracteristiqueRepository)
    public caracteristiqueRepository : CaracteristiqueRepository,
  ) {}

  @post('/caracteristiques', {
    responses: {
      '200': {
        description: 'Caracteristique model instance',
        content: {'application/json': {schema: getModelSchemaRef(Caracteristique)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caracteristique, {
            title: 'NewCaracteristique',
            
          }),
        },
      },
    })
    caracteristique: Caracteristique,
  ): Promise<Caracteristique> {
    return this.caracteristiqueRepository.create(caracteristique);
  }

  @get('/caracteristiques/count', {
    responses: {
      '200': {
        description: 'Caracteristique model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Caracteristique) where?: Where<Caracteristique>,
  ): Promise<Count> {
    return this.caracteristiqueRepository.count(where);
  }

  @get('/caracteristiques', {
    responses: {
      '200': {
        description: 'Array of Caracteristique model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Caracteristique, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Caracteristique) filter?: Filter<Caracteristique>,
  ): Promise<Caracteristique[]> {
    return this.caracteristiqueRepository.find(filter);
  }

  @patch('/caracteristiques', {
    responses: {
      '200': {
        description: 'Caracteristique PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caracteristique, {partial: true}),
        },
      },
    })
    caracteristique: Caracteristique,
    @param.where(Caracteristique) where?: Where<Caracteristique>,
  ): Promise<Count> {
    return this.caracteristiqueRepository.updateAll(caracteristique, where);
  }

  @get('/caracteristiques/{id}', {
    responses: {
      '200': {
        description: 'Caracteristique model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Caracteristique, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Caracteristique, {exclude: 'where'}) filter?: FilterExcludingWhere<Caracteristique>
  ): Promise<Caracteristique> {
    return this.caracteristiqueRepository.findById(id, filter);
  }

  @patch('/caracteristiques/{id}', {
    responses: {
      '204': {
        description: 'Caracteristique PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caracteristique, {partial: true}),
        },
      },
    })
    caracteristique: Caracteristique,
  ): Promise<void> {
    await this.caracteristiqueRepository.updateById(id, caracteristique);
  }

  @put('/caracteristiques/{id}', {
    responses: {
      '204': {
        description: 'Caracteristique PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() caracteristique: Caracteristique,
  ): Promise<void> {
    await this.caracteristiqueRepository.replaceById(id, caracteristique);
  }

  @del('/caracteristiques/{id}', {
    responses: {
      '204': {
        description: 'Caracteristique DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.caracteristiqueRepository.deleteById(id);
  }
}
