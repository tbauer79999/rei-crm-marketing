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
    <div className="bg-background text-white">
      {/* Back to Blog Link */}
      <section className="py-6 px-4 sm:px-6 md:px-8 bg-background border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-blue-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full glass-card border border-blue-500/20 text-sm font-semibold text-blue-400">
                {blogPost.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {blogPost.authorUrl ? (
                  <Link href={blogPost.authorUrl} className="font-medium hover:text-blue-400 transition-colors">
                    {blogPost.author}
                  </Link>
                ) : (
                  <span className="font-medium">{blogPost.author}</span>
                )}
                {blogPost.authorTitle && (
                  <span className="text-white/40 text-sm">· {blogPost.authorTitle}</span>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-white/[0.1] text-white/70 font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>

              {showShareMenu && (
                <div className="absolute top-full left-0 mt-2 bg-card-bg rounded-lg border-2 border-white/[0.08] shadow-xl p-2 z-10 min-w-[160px]">
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-background text-white/70 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-background text-white/70 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-background text-white/70 transition-colors"
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
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 m-0">Key Takeaways</p>
                      <ul className="space-y-3 m-0 p-0 list-none">
                        {block.content.split('\n').map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-white text-base leading-relaxed">
                            <span className="text-blue-400 font-bold mt-0.5 shrink-0">→</span>
                            <span>{renderContent(bullet)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 first:mt-0">
                      {block.content}
                    </h2>
                  );
                case 'subheading':
                  return (
                    <h3 key={index} className="text-xl sm:text-2xl font-semibold text-white mt-8 mb-3">
                      {block.content}
                    </h3>
                  );
                case 'paragraph':
                  return (
                    <p key={index} className="text-white/70 leading-relaxed mb-6 text-base sm:text-lg">
                      {renderContent(block.content)}
                    </p>
                  );
                case 'quote': {
                  const [quoteText, attribution] = block.content.split('\n');
                  return (
                    <blockquote key={index} className="not-prose my-8 border-l-4 border-blue-500 pl-6 py-2">
                      <p className="text-white text-lg sm:text-xl italic leading-relaxed mb-3">&ldquo;{quoteText}&rdquo;</p>
                      <cite className="text-sm font-semibold text-white/50 not-italic">&mdash; {attribution}</cite>
                    </blockquote>
                  );
                }
                case 'callout':
                  return (
                    <div key={index} className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-violet-500/5 border-l-4 border-blue-500">
                      <p className="text-white leading-relaxed font-medium text-base sm:text-lg m-0">
                        {renderContent(block.content)}
                      </p>
                    </div>
                  );
                case 'table':
                  return (
                    <div key={index} className="not-prose my-8 overflow-x-auto rounded-xl border border-white/[0.08]">
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
                            <tr key={ri} className={ri % 2 === 0 ? 'bg-card-bg' : 'bg-background'}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-4 py-3 text-white/70 border-t border-white/[0.06]">
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
                        <li key={ii} className="text-white/70 text-base sm:text-lg leading-relaxed">
                          {renderContent(item)}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul key={index} className="my-6 pl-6 space-y-2 list-disc">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="text-white/70 text-base sm:text-lg leading-relaxed">
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
            <div className="mt-16 pt-8 border-t border-white/[0.08]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-base">
                    {blogPost.authorUrl ? (
                      <Link href={blogPost.authorUrl} className="hover:text-blue-400 transition-colors">
                        {blogPost.author}
                      </Link>
                    ) : (
                      blogPost.author
                    )}
                  </span>
                  {blogPost.authorTitle && (
                    <span className="text-sm text-white/50">, {blogPost.authorTitle}</span>
                  )}
                </div>
                {blogPost.authorBio && (
                  <p className="text-white/60 text-sm leading-relaxed max-w-2xl">{blogPost.authorBio}</p>
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
                  name: 'SurFox AI',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.getsurfox.com/newSurFoxLogo1.png',
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

      {/* About SurFox AI */}
      <section className="py-10 px-4 sm:px-6 md:px-8 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-white/50 leading-relaxed">
            <strong className="text-white/70">About SurFox AI</strong> - SurFox AI is an AI-powered lead qualification platform that engages leads via SMS 24/7, surfaces buying signals automatically, and routes qualified prospects to sales teams with full conversation context.{' '}
            <Link href="/demo" className="text-blue-400 hover:underline">See how it works →</Link>
          </p>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-12 text-center">
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
                  className="bg-card-bg rounded-xl border-2 border-white/[0.08] p-6 hover:border-blue-500/30 hover:shadow-sm shadow-blue-500/5 transition-all group"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full glass-card border border-blue-500/20 text-xs font-semibold text-blue-400">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all text-sm"
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

    </div>
  );
}
