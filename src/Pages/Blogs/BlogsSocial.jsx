import React, {useEffect} from 'react'
import blogJpg from '../Blogs/blog.jpg'
import AOS from 'aos'

const BlogsSocial = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  return (
    <div className='blog-section'>
<div className="blogs" data-aos="fade-right">
    <h5>Blogs</h5>
    <h2>Level Up Your Social Marketing for 2022</h2>
</div>
    </div>
  )
}

export default BlogsSocial