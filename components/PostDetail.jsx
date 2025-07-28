import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={1200}
          height={675}
          className="rounded-t-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              height={30}
              width={30}
              className="rounded-full align-middle"
            />
            <p className="ml-2 inline align-middle text-lg text-gray-700">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>

        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>

        <div className="prose prose-lg max-w-none">
          <RichText
            content={post.content.raw}
            renderers={{
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {children}
                </a>
              ),
              h3: ({ children }) => (
                <h3 className="mb-4 text-xl font-semibold">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-md mb-4 font-semibold">{children}</h4>
              ),
              h2: ({ children }) => (
                <h2 className="mb-5 text-2xl font-bold text-gray-800">
                  {children}
                </h2>
              ),
              p: ({ children }) => <p className="mb-4">{children}</p>,
              img: ({ src, alt, width, height }) => (
                <Image
                  src={src}
                  alt={alt}
                  width={width || 600}
                  height={height || 400}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PostDetail
