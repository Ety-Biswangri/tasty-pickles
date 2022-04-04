import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>Core Concepts of Web Development</h1>
            <div className='blogs-container'>
                <div className='single-blog'>
                    <div className='single-blog-inside'>
                        <h2>What is Semantic Tag in HTML?</h2>
                        <p>
                            <ul>
                                <li>
                                    Semantic Tag properly describes the meaning of the HTML element.
                                </li>
                                <li>
                                    Semantic tags help the browsers and web developers to understand the purpose of the content.
                                </li>
                                <li>
                                    <b>Header</b>, <b>Nav</b>, <b>Section</b>, <b>Article</b>, <b>Footer</b> are the semantic tag names.
                                </li>
                                <li>
                                    It also helps search engines to read the web page correctly and find the accurate information as fast as possible.
                                </li>
                                <li>
                                    Thus, Semantic Tags in HTML strengthen the overall structure of web pages and provides a greater user experience.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='single-blog'>
                    <div className='single-blog-inside'>
                        <h2>What are the Differences Among Inline, Block and Inline-block Elements?</h2>
                        <p>
                            <ul>
                                <li>
                                    Block elements consume the whole area in HTML. Inline elements consume only its surrounding necessary area. Inline-block elements are same as Inline elements but margin and padding values can be set for these elements.
                                </li>
                                <li>
                                    Block element starts on a new line. But Inline element and Inline-block elements do not start on a new line.
                                </li>
                                <li>
                                    Width and height values can be set for the Block elements and Inline-block elements. But width and height can not be set for Inline elements.
                                </li>
                                <li>
                                    Block Elements: <b>div</b>, <b>p</b>
                                    <br />
                                    Inline Elements: <b>span</b>, <b>a</b>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;