'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Mail, RefreshCw } from 'lucide-react';
import { BlogPost, ContentBlock } from '@/data/blog-posts';

function extractFAQs(content: ContentBlock[]): Array<{ question: string; answer: string }> {
  const faqIndex = content.findIndex(
    b => b.type === 'heading' && 'content' in b && b.content.toLowerCase().includes('frequently asked')
  );
  if (faqIndex === -1) return [];

  const faqs: Array<{ question: string; answer: string }> = [];
  let currentQuestion = '';
  let answerParts: string[] = [];

  for (let i = faqIndex + 1; i < content.length; i++) {
    const block = content[i];
    if (block.type === 'subheading' && 'content' in block) {
      if (currentQuestion && answerParts.length > 0) {
        faqs.push({ question: currentQuestion, answer: answerParts.join(' ') });
      }
      currentQuestion = block.content;
      answerParts = [];
    } else if (block.type === 'paragraph' && 'content' in block && currentQuestion) {
      answerParts.push(block.content);
    }
  }
  if (currentQuestion && answerParts.length > 0) {
    faqs.push({ question: currentQuestion, answer: answerParts.join(' ') });
  }
  return faqs;
}

interface BlogPostClientProps {
  blogPost: BlogPost;
  relatedPosts: BlogPost[];
}

function renderContent(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) return text;
  linkRegex.lastIndex = 0;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 opacity-60 hover:opacity-100 transition-opacity text-sm font-medium"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default function BlogPostClient({ blogPost, relatedPosts }: BlogPostClientProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

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

  const displayDate = new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const displayUpdated = blogPost.lastUpdated
    ? new Date(blogPost.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null;

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
                {blogPost.authorUrl ? (
                  <Link href={blogPost.authorUrl} className="font-medium hover:text-orange transition-colors">
                    {blogPost.author}
                  </Link>
                ) : (
                  <span className="font-medium">{blogPost.author}</span>
                )}
                {blogPost.authorTitle && (
                  <span className="text-gray-400 text-sm">· {blogPost.authorTitle}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Published {displayDate}</span>
              </div>
              {displayUpdated && (
                <div className="flex items-center gap-2 text-sm">
                  <RefreshCw className="w-4 h-4" />
                  <span>Updated {displayUpdated}</span>
                </div>
              )}
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
                case 'tldr':
                  return (
                    <div key={index} className="not-prose my-8 p-6 sm:p-8 rounded-2xl bg-[#1e293b]">
                      <p className="text-xs font-bold uppercase tracking-widest text-orange mb-4 m-0">Key Takeaways</p>
                      <ul className="space-y-3 m-0 p-0 list-none">
                        {block.content.split('\n').map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-white text-base leading-relaxed">
                            <span className="text-orange font-bold mt-0.5 shrink-0">→</span>
                            <span>{renderContent(bullet)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
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
                      {renderContent(block.content)}
                    </p>
                  );
                case 'quote': {
                  const [quoteText, attribution] = block.content.split('\n');
                  return (
                    <blockquote key={index} className="not-prose my-8 border-l-4 border-orange pl-6 py-2">
                      <p className="text-gray-800 text-lg sm:text-xl italic leading-relaxed mb-3">&ldquo;{quoteText}&rdquo;</p>
                      <cite className="text-sm font-semibold text-gray-500 not-italic">&mdash; {attribution}</cite>
                    </blockquote>
                  );
                }
                case 'callout':
                  return (
                    <div key={index} className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange/5 to-purple-500/5 border-l-4 border-orange">
                      <p className="text-gray-800 leading-relaxed font-medium text-base sm:text-lg m-0">
                        {renderContent(block.content)}
                      </p>
                    </div>
                  );
                case 'table':
                  return (
                    <div key={index} className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#1e293b]">
                            {block.headers.map((header, hi) => (
                              <th key={hi} className="px-4 py-3 text-left text-white font-semibold text-sm">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-4 py-3 text-gray-700 border-t border-gray-100">
                                  {renderContent(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                case 'list':
                  return block.ordered ? (
                    <ol key={index} className="my-6 pl-6 space-y-2 list-decimal">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          {renderContent(item)}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul key={index} className="my-6 pl-6 space-y-2 list-disc">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          {renderContent(item)}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </motion.article>

          {/* Author Bio */}
          {(blogPost.authorTitle || blogPost.authorBio) && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-navy text-base">
                    {blogPost.authorUrl ? (
                      <Link href={blogPost.authorUrl} className="hover:text-orange transition-colors">
                        {blogPost.author}
                      </Link>
                    ) : (
                      blogPost.author
                    )}
                  </span>
                  {blogPost.authorTitle && (
                    <span className="text-sm text-gray-500">&mdash; {blogPost.authorTitle}</span>
                  )}
                </div>
                {blogPost.authorBio && (
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{blogPost.authorBio}</p>
                )}
              </div>
            </div>
          )}

          {/* Schema.org Article Markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: blogPost.title,
                description: blogPost.excerpt,
                image: blogPost.featuredImage || 'https://www.getsurfox.com/og-image.png',
                author: {
                  '@type': 'Person',
                  name: blogPost.author,
                  ...(blogPost.authorTitle && { jobTitle: blogPost.authorTitle }),
                  ...(blogPost.authorUrl && { url: `https://www.getsurfox.com${blogPost.authorUrl}` }),
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'SurFox',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.getsurfox.com/logo.png',
                  },
                },
                datePublished: blogPost.date,
                dateModified: blogPost.lastUpdated || blogPost.date,
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': `https://www.getsurfox.com/blog/${blogPost.slug}`,
                },
              }),
            }}
          />

          {/* Schema.org FAQPage Markup */}
          {(() => {
            const faqs = extractFAQs(blogPost.content);
            if (faqs.length === 0) return null;
            return (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(faq => ({
                      '@type': 'Question',
                      name: faq.question,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                      },
                    })),
                  }),
                }}
              />
            );
          })()}

          {/* Schema.org HowTo Markup */}
          {blogPost.howToSteps && blogPost.howToSteps.length > 0 && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'HowTo',
                  name: blogPost.title,
                  description: blogPost.excerpt,
                  step: blogPost.howToSteps.map(step => ({
                    '@type': 'HowToStep',
                    name: step.name,
                    text: step.text,
                  })),
                }),
              }}
            />
          )}
        </div>
      </section>

      {/* About SurFox */}
      <section className="py-10 px-4 sm:px-6 md:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 leading-relaxed">
            <strong className="text-gray-700">About SurFox AI</strong> - SurFox is an AI-powered lead qualification platform that engages leads via SMS 24/7, surfaces buying signals automatically, and routes qualified prospects to sales teams with full conversation context.{' '}
            <Link href="/demo" className="text-orange hover:underline">See how it works →</Link>
          </p>
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
          color: #c2410c;
        }

        .bg-orange {
          background-color: #c2410c;
        }
      `}</style>
    </div>
  );
}
