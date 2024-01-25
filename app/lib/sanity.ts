import ImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  apiVersion: '2024-01-24',
  dataset: 'production',
  projectId: 'rqm5xyqt',
  useCdn: false,
});

const builder = ImageUrlBuilder(sanityClient);

// prepara URL da imagem para ser consumida pelo Sanity
export const urlFor = (source: any) => builder.image(source);
