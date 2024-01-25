import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { SimpleBlogCard } from './lib/interface';
import { sanityClient, urlFor } from './lib/sanity';

export const revalidate = 30; // Revalida a cada 30 segundos no máximo

const getData = async () => {
  const query = `
  *[_type=='blog'] | order(_createdAt desc){
    _type, 
    title, 
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }
  `;

  const data = await sanityClient.fetch(query);
  return data;
};

export default async function Home() {
  const data: SimpleBlogCard[] = await getData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-5'>
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            className='rounded-t-lg h-[200px] object-cover'
            src={urlFor(post.titleImage).url()}
            alt={post.title}
            width={500}
            height={500}
          />

          <CardContent className='mt-5'>
            <h3 className='text-lg line-clamp-2 font-bold'>{post.title}</h3>
            <p className='text-sm text-gray-500 line-clamp-3'>
              {post.smallDescription}
            </p>
            <Button
              asChild
              className='w-full mt-7'>
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
