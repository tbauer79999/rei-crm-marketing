'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getAllBlogPosts } from '@/data/blog-posts';

// Get all blog posts from centralized data
const blogPosts = getAllBlogPosts();

const categories = ['All', 'AI & Technology', 'Product Insights', 'Sales Strategy', 'Security & Privacy', 'Strategy', 'Business Impact'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-background text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 gradient-bg/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl font-bold text-white mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Insights & Updates from SurFox AI
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Thoughts on AI, sales intelligence, and the future of human interaction analysis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] sticky top-16 z-30" style={{ backgroundColor: '#0a0f1e' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-sm shadow-blue-500/5'
                    : 'bg-blue-500/10 text-white/70 hover:bg-blue-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background isolate">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg rounded-2xl border-2 border-white/[0.08] overflow-hidden hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-blue-500/20">
                    <Tag className="w-3 h-3 text-blue-400" />
                    <span className="text-xs font-semibold text-blue-400">{post.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                    <span className="text-sm text-white/60">By {post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white/50">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 px-4 leading-tight">
              Stay Updated with SurFox AI
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Get the latest insights on AI, sales intelligence, and conversation analysis delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-background border-2 border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-base text-white placeholder:text-white/40"
              />
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-sm shadow-blue-500/5 shadow-blue-500/5 hover:shadow-purple-500/25 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
