import Card, { BlogType } from '@/components/Card'
import React from 'react'

const page = () => {
    const blogs = [
        {
          title: 'Understanding JavaScript Closures',
          image: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg',
          description: 'A deep dive into closures in JavaScript and how they work.',
          content: 'Closures are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope...',
          slug: 'understanding-javascript-closures'
        },
        {
          title: 'Getting Started with Python',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
          description: 'An introductory guide to programming with Python.',
          content: 'Python is a versatile and popular programming language known for its simplicity and readability...',
          slug: 'getting-started-with-python'
        },
        {
          title: 'Mastering CSS Grid Layout',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
          description: 'Learn how to create complex layouts easily with CSS Grid.',
          content: 'CSS Grid Layout is a two-dimensional layout system for the web that allows developers to create complex layouts...',
          slug: 'mastering-css-grid-layout'
        },
        {
          title: 'Exploring the New Features in Java 17',
          image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
          description: 'A look at the new features and improvements in Java 17.',
          content: 'Java 17 brings a host of new features and enhancements, including pattern matching for switch, sealed classes...',
          slug: 'exploring-new-features-java-17'
        },
        {
          title: 'Building RESTful APIs with Node.js',
          image: 'https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg',
          description: 'A guide to building RESTful APIs using Node.js and Express.',
          content: 'Node.js, with its asynchronous nature and event-driven architecture, is a great choice for building RESTful APIs...',
          slug: 'building-restful-apis-nodejs'
        }
      ];
       

  return (
    <div className='container px-4 mx-auto grid md:grid-cols-3 grid-cols-1'>
      {blogs.map((blog:BlogType, index) => (
        <Card key={index} blog={blog} />
      ))}
    </div>
  )
}

export default page