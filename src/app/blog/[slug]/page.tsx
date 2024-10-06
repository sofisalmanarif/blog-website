export default function Page({ params }: { params: { slug: string } }) {
    return<div className="container max-w-5xl mx-auto p-10 ">
  <h1 className="text-4xl font-bold mb-2">Title of the Blog</h1>
  <p className="text-lg text-gray-700 mb-6 border-l-4 border-gray-700 italic pl-4">This is a brief description of the blog post. It provides an overview of the content and entices the reader to continue reading.</p>
  <p className="text-sm text-gray-500 mb-4">Date: October 10, 2023 | Author: John Doe</p>
  <div className="prose" dangerouslySetInnerHTML={{ __html: "content" }}></div>
</div>
  }