import { NotFoundException } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";


export class BaseService<Entity> {
    constructor(private repository: Repository<Entity>) { }

    findAll(params = {}): Promise<Entity[]> {
        return this.repository.find(params);
    }

    async findOne(id: number, params = {}): Promise<Entity> {
        const entity = await this.repository.findOneBy({ id } as any);
        if (!entity) {
            throw new NotFoundException();
        }
        return entity;
    }

    create(entity): Promise<Entity> {
        return this.repository.save(entity);
    }

    async update(id: number, entity): Promise<Entity> {
        const newEntity = await this.repository.preload({
            id,
            ...entity
        })

        if (!newEntity) {
            throw new NotFoundException();
        }
        if (newEntity) {
            return this.repository.save(newEntity);
        }
    }

    async remove(id: number): Promise<DeleteResult> {
        const result = await this.repository.delete(id);
        if (!result.affected || result.affected === 0) {
            throw new NotFoundException();
        }
        return result;
    }
}