import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Course } from '../../courses/entities/course.entity';

@Entity({ name: 'course_modules' })
export class CourseModule {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'varchar' })
  title?: string;

  @Column({ nullable: false, type: 'varchar' })
  description?: string;

  @ManyToOne(() => Course, (course) => course.modules, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course?: Course;

  @Column()
  courseId?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
