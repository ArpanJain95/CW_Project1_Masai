import React, { useEffect, useState } from 'react'
import CompBlogBannerImg from '../Store/CompBlogBannerImg.svg'
import '../BlogComponents/Comp1Blog.css'

const getRandomBackground = () => {
  const colors = ['#abb9f0', '#ff6164', '#3a609b']
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

export const Comp1Blog = () => {
  const [blogData, setBlogData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('/BlogData.json')
        const data = await response.json()
        setBlogData(data)
      }catch(error){
        console.error('Error fecthing data:', error)
      }
    }
    fetchData()
  }, [])

    return (
        <div className='comp1Blog-wrapper'>
          <div className='comp1BlogTop'>
            <h1>EXPLORE A WORLD OF PRODUCTIVITY, FROM TIME TRACKING TECHNIQUES TO EFFICIENCY HACKS.</h1>
            <img src={CompBlogBannerImg} className='blogBannerImg' alt="Blog Banner Img" />
            <h2>New Reports & Historic Rates and Costs support</h2>
          </div>
          <div className='comp1BlogBottom'>
            {blogData.map((blog)=>(
              <div key={blog.id} className='blogCard'>
                <div className='blogImgCont' style={{backgroundColor: getRandomBackground()}}>
                  <img src={blog.blogPath} className='blogImg' alt={blog.title} />
                </div>
                <div className='blogCardText'>
                  <h4>{blog.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}