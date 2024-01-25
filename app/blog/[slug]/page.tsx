import { fullBlog } from '@/app/lib/interface';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { sanityClient, urlFor } from '../../lib/sanity';

export const revalidate = 30; // Revalida a cada 30 segundos no máximo

const getData = async (slug: string) => {
  try {
    const query = `
    *[_type=='blog' && slug.current == "${slug}"]  {
      "currentSlug": slug.current, 
      title, 
      content,
      titleImage
    }[0]
  `;
    const data = await sanityClient.fetch(query);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className='mt-8'>
      <h1>
        <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
          Matheus Ribeiro – Blog
        </span>
        <span className='mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>
          {data?.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={800}
        height={800}
        priority
        className='rounded-lg mt-8 border'
      />

      <div className='mt-16 prose prose-green prose-xl prose-li:marker:text-primary dark:prose-invert prose-a:text-primary'>
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogArticle;
