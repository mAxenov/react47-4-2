import React from 'react';
import moment from 'moment';
import MyButton from './UI/button/MyButton';

function PostList({ posts, remove }) {
    const sortItems = posts.sort((a, b) => moment(new Date(b.date), 'DD.MM.YY') - moment(new Date(a.date), 'DD.MM.YY'));
    return (
        <div className='post'>
            <div className='post-item'>
                <div>Дата (ММ.ДД.ГГ)</div>
                <div>Пройдено км</div>
                <div>Действия</div>
            </div>
            <div className='container-post'>
                {sortItems.map(item => {
                    return (
                        <div key={item.id} className='post-item'>
                            <div>{moment(new Date(item.date)).format('DD.MM.YYYY')}</div>
                            <div>{item.traveled}</div>
                            <MyButton style={{ border: 'none' }} onClick={() => remove(item)}>X</MyButton>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PostList;