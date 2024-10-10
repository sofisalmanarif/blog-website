import Card, { BlogType } from '@/components/Card'
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import React from 'react'






const page = () => {
  const contentDirectory = path.join(process.cwd(), '/src/content');
  console.log(contentDirectory)
  const filenames = fs.readdirSync(contentDirectory, 'utf-8');
  
  console.log(filenames)
  
  const blogs:BlogType[] = filenames.map(file=>{
    // console.log("first",file)
       const filecontent =  fs.readFileSync(`${contentDirectory}/${file}`,'utf-8')
       
       const {data} = matter(filecontent)
      //  console.log("data",data)
       return data
  })
  // console.log(blogs)

  return (
    <div className='container  min-h-screen px-4 justify-items-center mx-auto grid md:grid-cols-3 grid-cols-1'>
      {blogs.map((blog:BlogType, index) => (
        <Card key={index} blog={blog} />
      ))}
    </div>
  )
}

export default page