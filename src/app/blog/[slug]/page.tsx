import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default function Page({ params }: { params: { slug: string } }) {
    const filepath =  `src/content/${params.slug}.md`
    console.log(filepath)
      const fileName = fs.readFileSync(filepath,"utf-8")

      const {content,data:blog} = matter(fileName)
      // console.log("metter returns",data)
  
    return<div className="container max-w-5xl mx-auto p-10 ">
  <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
  <p className="text-lg dark:text-gray-500 text-gray-700 mb-6 border-l-4 border-gray-700 italic pl-4">{blog.description}</p>
  <p className="text-sm text-gray-500 mb-4">Date: {blog.date} | Author: {blog.author}</p>
  <div className="prose" dangerouslySetInnerHTML={{ __html: content }}></div>
</div>
  }