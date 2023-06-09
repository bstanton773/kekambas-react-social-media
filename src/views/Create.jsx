import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Create({ loggedIn, flashMessage }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn){
            flashMessage('You must be logged in to create a new post', 'danger');
            navigate('/login');
        }
    })

    async function handleSubmit(e){
        e.preventDefault();

        // Get the data from the form
        let title = e.target.title.value;
        let content = e.target.content.value;

        // Get the token from localStorage
        let token = localStorage.getItem('token');

        // Set up the request headers
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `Bearer ${token}`);

        // Set up the request body
        let requestBody = JSON.stringify({ title, content })

        // Make the fetch request
        let response = await fetch('https://kekambas-blog-api.onrender.com/api/posts', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        });

        let data = await response.json();

        if (data.error){
            flashMessage(data.error, 'danger');
        } else {
            flashMessage(`${data.title} has been created`, 'success');
            navigate('/');
        };
    };

    return (
        <div className='row'>
            <div className="col">
                <div className="card mt-3">
                    <div className="card-header text-center">Create A Post</div>
                    <div className="card-body">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="title" className="form-control my-3" placeholder='Enter Title' />
                                <textarea name="content" className="form-control my-3" placeholder='Enter Post Content' />
                                <input type="submit" value="Create Post" className='btn btn-success w-100' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}