import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts, getAllBlogPosts } from '@/data/blog-posts';
import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    return {
      title: 'Post Not Found | SurFox',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const metaTitle = blogPost.metaTitle || `${blogPost.title} | SurFox`;
  const metaDescription = blogPost.metaDescription || blogPost.excerpt;
  const url = `https://www.getsurfox.com/blog/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: url,
      type: 'article',
      publishedTime: blogPost.date,
      authors: [blogPost.author],
      siteName: 'SurFox',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Get the blog post based on the slug from the URL
  const blogPost = getBlogPostBySlug(slug);

  // If no blog post found, show 404
  if (!blogPost) {
    notFound();
  }

  // Get related posts if they exist
  const relatedPosts = blogPost.relatedPosts ? getRelatedPosts(blogPost.relatedPosts) : [];

  // Breadcrumb structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.getsurfox.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.getsurfox.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blogPost.title,
        item: `https://www.getsurfox.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostClient blogPost={blogPost} relatedPosts={relatedPosts} />
    </>
  );
}
