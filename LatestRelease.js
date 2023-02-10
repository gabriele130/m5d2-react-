import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import '../css/LatestRelease.css'



const LatestRelease = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);







    return (
        <Container className='container'>

            {posts.map((post) => {
                return (
                    <>
                        <Card className='card' style={{ width: '15rem' }}>
                            <img src={post.img} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.category}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                );
            })}

        </Container>
    );
};




export default LatestRelease