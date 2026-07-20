import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import JsonLd from "../../shared/Components/Seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/data";

type Props = { params: { slug: string } };

/**
 * Adding a post requires nothing beyond a new entry in `blogPosts`: the route,
 * sitemap entry, metadata and Article schema are all derived from it.
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Any slug not present in blogPosts 404s rather than rendering empty.
export const dynamicParams = false;

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    ...buildMetadata({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
    }),
    authors: [{ name: post.author }],
  };
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const body = post.sections
    .map((s) => `${s.title}. ${s.content.join(" ")}`)
    .join(" ");

  return (
    <article className="bg-gray-100 min-h-screen">
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            image: post.image,
            author: post.author,
            datePublished: post.datePublished,
            section: post.category,
            body,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <div className="relative h-[280px] md:h-[420px] mt-16">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <span className="inline-block bg-blue-100 text-[#0f1031] text-xs px-3 py-1 rounded-full mb-4 font-semibold">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-x-3 text-sm text-gray-500 mb-8">
            <span className="font-medium">{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.datePublished}>
              {formatDate(post.datePublished)}
            </time>
          </div>

          <p className="text-lg text-gray-700 mb-8">{post.excerpt}</p>

          {post.sections.map((section, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                {section.title}
              </h2>
              {section.content.length > 1 ? (
                <ul className="list-disc pl-5 space-y-1">
                  {section.content.map((item, j) => (
                    <li key={j} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{section.content[0]}</p>
              )}
            </section>
          ))}

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-4 bg-[#0f1031] hover:bg-[#640e0e] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
