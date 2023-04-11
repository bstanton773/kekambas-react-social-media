import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard';

export default function Home({ user, loggedIn }) {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [onlyMine, setOnlyMine] = useState(false);

    useEffect(() => {
        async function fetchPostData(){
            let response = await fetch('https://kekambas-blog-api.onrender.com/api/posts');
            let data = await response.json();
            if (onlyMine){
                setPosts(data.filter(post => post.author.id === user.id))
            } else {
                setPosts(data);
            }
        }
        fetchPostData();
    }, [onlyMine, user.id]);

    const firstPostIndex = page * 10;
    const lastPostIndex = firstPostIndex + 10;

    return (
        <div className='row'>
            <div className="col-12 col-lg-8 order-1 order-lg-1">
                {posts.slice(firstPostIndex, lastPostIndex).map( post => <PostCard key={post.id} post={post} user={user} />)}
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
                    <div className="card mt-3">
                        <div className="card-header">Page: {page + 1}</div>
                        <div className="card-body">
                            { page > 0 ? (<button className="btn btn-danger w-50" onClick={() => setPage(page - 1)}>Page Down</button>) : null }
                            { posts.length >= lastPostIndex ? (<button className="btn btn-success w-50" onClick={() => setPage(page + 1)}>Page Up</button>) : null}
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <button className='btn btn-success w-100' onClick={() => setOnlyMine(!onlyMine)}>{ loggedIn && onlyMine ? "See All Posts" : "See Only My Posts" }</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
