import type { CollectionEntry } from 'astro:content';
import { Container } from '../Container';

interface ProjectCardProps {
  project: CollectionEntry<'projects'>;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { data } = project;
  return (
    <Container>
      <div className='h-full w-3/4 rounded-xl shadow-md shadow-primary-contrast'>
        <h1 className='my-4 ml-4'>{data.title}</h1>
        <div className='h-3/4 w-full'>
          <img src={data.image.url} alt={data.image.alt} className='h-full w-full object-contain' />
        </div>
        <div className='my-4 ml-4'>
          <p>{data.description}</p>
        </div>
      </div>
    </Container>
  );
}
