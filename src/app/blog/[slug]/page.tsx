'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Mail } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '@/data/blog-posts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Get the blog post based on the slug from the URL
  const blogPost = getBlogPostBySlug(params.slug);

  // If no blog post found, show 404
  if (!blogPost) {
    notFound();
  }

  // Get related posts if they exist
  const relatedPosts = blogPost.relatedPosts ? getRelatedPosts(blogPost.relatedPosts) : [];

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = blogPost.title;

    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Back to Blog Link */}
      <section className="py-6 px-4 sm:px-6 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-sm font-semibold text-orange">
                {blogPost.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:border-orange hover:text-orange transition-all"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>

              {/* Share Menu */}
              {showShareMenu && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg border-2 border-gray-200 shadow-xl p-2 z-10 min-w-[160px]">
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 text-gray-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 text-gray-700 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 text-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {blogPost.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl sm:text-3xl font-semibold text-navy mt-12 mb-4 first:mt-0">
                      {block.content}
                    </h2>
                  );
                case 'subheading':
                  return (
                    <h3 key={index} className="text-xl sm:text-2xl font-semibold text-navy mt-8 mb-3">
                      {block.content}
                    </h3>
                  );
                case 'paragraph':
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                      {block.content}
                    </p>
                  );
                case 'callout':
                  return (
                    <div key={index} className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange/5 to-purple-500/5 border-l-4 border-orange">
                      <p className="text-gray-800 leading-relaxed font-medium text-base sm:text-lg m-0">
                        {block.content}
                      </p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Ready to Transform Your Sales Intelligence?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              See how SurFox can help your team close more deals with AI-powered conversation insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-access"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-purple-600 font-semibold hover:shadow-lg transition-all"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-navy mb-10 sm:mb-12 text-center">
              Related Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-orange/30 hover:shadow-lg transition-all group"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-xs font-semibold text-orange">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-4 group-hover:text-orange transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all text-sm"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .text-navy {
          color: #1e293b;
        }

        .bg-navy {
          background-color: #1e293b;
        }

        .text-orange {
          color: #ea580c;
        }

        .bg-orange {
          background-color: #ea580c;
        }
      `}</style>
    </div>
  );
}
