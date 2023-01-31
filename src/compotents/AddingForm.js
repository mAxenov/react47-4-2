import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/Input/MyInput';


function AddingForm({ create }) {
    const [post, setPost] = useState({
        date: '',
        traveled: ''
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: post.date,
            ...post
        }
        create(newPost);
        setPost({
            date: '',
            traveled: ''
        });
    }

    return (
        <form className='wrapper-form'>
            <div>
                <p>ДАТА (ДД.ММ.ГГ)</p>
                <MyInput
                    value={post.date}
                    onChange={e => setPost({ ...post, date: e.target.value })}
                    type="date" />
            </div>
            <div>
                <p>Пройдено км</p>
                <MyInput
                    value={post.traveled}
                    onChange={e => setPost({ ...post, traveled: e.target.value })}
                    type="number"
                />
            </div>
            <MyButton onClick={addNewPost}>Ок</MyButton>
        </form>
    );
}

export default AddingForm;