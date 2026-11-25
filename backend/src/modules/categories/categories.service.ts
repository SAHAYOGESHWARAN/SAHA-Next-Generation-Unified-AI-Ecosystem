import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '@/entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll() {
    return this.categoryRepository.find({
      where: { isActive: true },
      order: { order: 'ASC' },
    });
  }

  async findBySlug(slug: string) {
    return this.categoryRepository.findOne({
      where: { slug, isActive: true },
    });
  }

  async findById(id: string) {
    return this.categoryRepository.findOne({
      where: { id, isActive: true },
    });
  }

  async create(data: Partial<Category>) {
    const category = this.categoryRepository.create(data);
    return this.categoryRepository.save(category);
  }

  async update(id: string, data: Partial<Category>) {
    await this.categoryRepository.update(id, data);
    return this.findById(id);
  }
}
