import React from 'react'

export default function Sidebar({ page, setPage, posts, onlyMine, setOnlyMine, lastPostIndex, loggedIn }) {

    return (
        <>
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
                { loggedIn ? (
                    <div className="card mt-3">
                        <div className="card-body">
                            <button className='btn btn-success w-100' onClick={() => setOnlyMine(!onlyMine)}>{ loggedIn && onlyMine ? "See All Posts" : "See Only My Posts" }</button>
                        </div>
                    </div>
                ) : (
                    null
                )}
            </div>
        </>
    )
}
