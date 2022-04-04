import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>Core Concepts</h1>
            <div className='blogs-container'>
                <div className='single-blog'>
                    <div className='single-blog-inside'>
                        <h2>What is Semantic Tag in HTML?</h2>
                        <p>Semantic Tag properly describes the meaning of the HTML element. Semantic tags help the browsers and web developers to understand the purpose of the content. Header, Nav, Section, Article, Footer are the semantic tag names. It also helps search engines to read the web page correctly and find the accurate information as fast as possible. Thus, Semantic Tags in HTML strengthen the overall structure of web pages and provides a greater user experience.</p>
                    </div>
                </div>
                <div className='single-blog'>
                    <div className='single-blog-inside'>
                        <h2>What is Context API?</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;