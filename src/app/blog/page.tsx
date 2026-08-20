import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/home/CTAFinal";
import { MOCK_BLOG_POSTS } from "@/lib/mock-blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Logístico — Tendencias y Buenas Prácticas",
  description:
    "Artículos, guías y novedades sobre transporte de carga, distribución programada, última milla y logística e-commerce en Chile.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Novedades & Tendencias"
        title="Blog y Conocimiento Logístico"
        description="Explora artículos, análisis del sector de transporte y mejores prácticas operacionales redactadas por nuestro equipo de especialistas."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="accent" size="sm">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-extrabold text-[#0F2C59] group-hover:text-[#FF6B00] transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#0F2C59] text-white flex items-center justify-center text-xs font-bold">
                      {post.author.name[0]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {post.author.name}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#0F2C59] group-hover:text-[#FF6B00] flex items-center gap-1"
                  >
                    Leer &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
