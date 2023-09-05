import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getDataCloud } from 'core/services/connect';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useLocation } from 'react-router-dom';
import { Page } from 'zmp-ui';
import { useNavigate } from 'react-router';

const DetailBlog = () => {
    const { state } = useLocation();
    const { id } = state || {};
    const navigate = useNavigate();

    const [data, setData] = useState<any>();
    const [htmlString, setHtmlString] = useState<string>(''); // Lưu trữ chuỗi HTML

    useEffect(() => {
        const fetchLstData = async () => {
            const lst = await getDataCloud("blogs", "GOLAND", 3, 0, id);
            setData(lst);
        };
        fetchLstData();
    }, [id]);

    useEffect(() => {
        // Kiểm tra xem data đã có giá trị chưa
        if (data && data.length > 0) {
            const item = data[0];
            setHtmlString(item.content); // Lưu trữ chuỗi HTML vào state
        }
    }, [data]);

    if (!data) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    const item = data[0];

    // handle next page 
    const handleNextPage = () => {
        navigate(-1);
    }
    return (
        <div>
            <img src={item.logo} alt="Logo" className='img-detail-blog' />
            <div className='ic-back-detail-blog' onClick={handleNextPage}><ArrowBackIosIcon /></div>
            <div className='col-detail-blog'>
                <div className='title-detail-blog'>{item.title}</div>
                <div className='date-detail-blog'>Ngày đăng: {item.creationTime}</div>
                <Page >
                    {ReactHtmlParser(htmlString)}
                </Page>
            </div>
            <div>aaaâ</div>
        </div >
    );
};

export default DetailBlog;
