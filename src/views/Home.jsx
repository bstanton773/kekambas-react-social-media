import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard';

export default function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPostData(){
            let response = await fetch('https://kekambas-blog-api.onrender.com/api/posts');
            let data = await response.json();
            setPosts(data);
        }
        fetchPostData();
    }, []);

    return (
        <div className='row'>
            <div className="col-12 col-lg-8 order-1 order-lg-1">
                {posts.map( post => <PostCard key={post.id} post={post} />)}
            </div>

            <div className="col-12 col-lg-4 order-0 order-lg-1">

                <div className="position-sticky top-0">
                    <div className="card mt-3">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <form action="" method="post">
                                <div className="input-group">
                                    <input type="text" className='form-control' placeholder='Enter Search Term...' />
                                    <input type='submit' className='btn btn-primary' value='Search' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
