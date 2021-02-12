import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CourseModule } from '../../course-modules/entities/course-module.entity';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', nullable: false })
  title?: string;

  @Column({ type: 'varchar', nullable: false })
  description?: string;

  @Column({ type: 'varchar', nullable: false })
  teacher_id?: string;

  @OneToMany(() => CourseModule, (courseModule) => courseModule.course, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  modules?: CourseModule[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
