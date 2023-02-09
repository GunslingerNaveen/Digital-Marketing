import React from 'react'
import { Link } from 'react-router-dom'
import './article.css'

const Article = ({imgUrl,date,text,title}) => {
  return (
    <div className='nk__blog-container_article'>
      <div className='nk__blog-container_article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='nk__blog-container_article-content'>
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <Link to={'/about'}><h4>Read Full Article</h4></Link>
      </div>
    </div>
  )
}

export default Article
