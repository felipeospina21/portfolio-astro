import type { CollectionEntry } from 'astro:content';
import { Container } from '../Container';

interface ProjectCardProps {
  project: CollectionEntry<'projects'>;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { data } = project;
  return (
    <Container>
      <div className='h-5/6 w-3/4 rounded-xl shadow-lg shadow-primary-contrast'>
        <h1 className='my-4 mx-auto w-11/12 text-2xl'>{data.title}</h1>
        <div className='mx-auto w-11/12'>
          <img
            src={data.image.url}
            alt={data.image.alt}
            className='h-full w-full rounded-xl object-contain'
          />
        </div>
        <div className='my-4 mx-auto w-11/12 text-sm'>
          <p>{data.description}</p>
        </div>
      </div>
    </Container>
  );
}
