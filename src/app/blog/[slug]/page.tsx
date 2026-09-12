import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTAFinal } from "@/components/home/CTAFinal";
import { MOCK_BLOG_POSTS } from "@/lib/mock-blog";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Artículo No Encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader
        badge={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="py-16 sm:py-24 bg-white">
        <Container size="sm">
          {/* Post Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#480CA8] to-[#7209B7] text-white flex items-center justify-center font-bold text-sm">
                {post.author.name[0]}
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-sm">
                  {post.author.name}
                </span>
                <span>{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-slate-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
            <Button
              href="/blog"
              variant="outline"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Volver a todos los artículos
            </Button>
            <Button href="/cotizar" variant="accent" size="md">
              Cotizar servicio para mi empresa
            </Button>
          </div>
        </Container>
      </article>

      <CTAFinal />
    </>
  );
}
