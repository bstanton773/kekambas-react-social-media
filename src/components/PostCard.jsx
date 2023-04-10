import React from 'react'

export default function PostCard({ post }) {
    return (
        <>
            <div className="card mt-3 p-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="card-img-top" src={ post.image_url ? post.image_url : `https://picsum.photos/500?random=${Math.floor(Math.random() * 100)}` } alt="random" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-subtitle text-muted">{ post.date_created }</h6>
                            <h5 className="card-title">{ post.title }</h5>
                            <h6 className="card-subtitle">By: { post.author.username }</h6>
                            <p className="card-text">{ post.body }</p>
                            { (post.author.username === 'username1') ? (
                                <>
                                    <a href="/" className="btn btn-success">Edit</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deletePostModal-${ post.id }`}>
                                        Delete
                                    </button>  
                                </>
                            ): null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={`deletePostModal-${ post.id }`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete { post.title }?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Are you sure you want to delete { post.title }? This action cannot be undone.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href="/" className="btn btn-danger">Delete Post</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
