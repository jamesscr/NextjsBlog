import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-2">
      <Head>
        <title>Graphql Blog App</title>
        <meta name="google-adsense-account" content="ca-pub-9439475497990876" />
        <meta
          name="description"
          content="Graphql Blog App created with NextJS for web, ios and android"
        />
        <meta
          name="viewport"
          content="width=devise-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9439475497990876"
          crossorigin="anonymous"
        ></script>
      </Head>
      <FeaturedPosts />
      {/* Bloc publicitaire AdSense */}
      <div className="my-8 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '728px',
            height: '90px',
          }}
          data-ad-client="ca-pub-9439475497990876"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          {`
      (adsbygoogle = window.adsbygoogle || []).push({});
    `}
        </script>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
