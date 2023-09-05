import React from 'react'
import { useNavigate } from 'react-router';

const BlogItem = ({ data }) => {
    // navigate
    const navigate = useNavigate();

    // handle next page
    const hanleNextPage = (id: string) => {
        navigate("/detail-blog", { state: { id } });
    }

    return (
        <div className='col-blog-item'>
            <div className='row-blog-item'>
                <div className='title-blog'>Tin tức</div>
                <div className='title-see-all'>Xem thêm</div>
            </div>
            <div className='body-item-blog'>
                {
                    data.map((e: any) => <div className='item-blog' key={e.id} onClick={() => hanleNextPage(e.id)}>
                        <img className='img-item-blog' src={e.logo} />
                        <div className='title-blog-item'>{e.title}</div>
                        <div className='date-item-blog'>Ngày đăng: {e.creationTime}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default BlogItem
