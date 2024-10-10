import { transformerCopyButton } from '@rehype-pretty/transformers'
import fs from 'fs'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import path from 'path'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'




export default async function  Page({ params }: { params: { slug: string } }) {
    const filepath = path.join(process.cwd(),`src/content/${params.slug}.md`) 

    if(!fs.existsSync(filepath)){
      console.log("file not found",filepath)
      notFound()
      return
    }
    console.log(filepath)
      const fileName = fs.readFileSync(filepath,"utf-8")

      const {content,data:blog} = matter(fileName)
      

      const processor =  unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, {title: '👋🌍'})
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypePrettyCode, {
        theme: "one-dark-pro",
        transformers: [
          transformerCopyButton({
            visibility: 'always',
            feedbackDuration: 3_000,
          }),
        ],
      })
      
      const htmlContent = (await processor.process(content)).toString()

    return<div className="container max-w-5xl mx-auto p-10 ">
  <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
  <p className="text-lg dark:text-gray-500 text-gray-700 mb-6 border-l-4 border-gray-700 italic pl-4">{blog.description}</p>
  <p className="text-sm text-gray-500 mb-4">Date: {blog.date} | Author: {blog.author}</p>
  <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
</div>
  }