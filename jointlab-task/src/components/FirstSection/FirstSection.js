import style from './FirstSection.module.css';

const FirstSection = () => {
    return (
        <div className={style['wrapper-main']}>
            <div className={style['wrapper']}>
                <div className={style['container']}>
                    <div>
                        <h1 className={style['logo']}>Jointlab</h1>
                        <div>
                            <div className={style['flex']}>
                                <div className={style['arrow']}></div><p>Hỗ trợ bổ sung dưỡng chất cho khớp sụn.</p>
                            </div>
                            <div className={style['flex']}>
                                <div className={style['arrow']}></div><p>Hỗ trợ giúp khớp vận động linh hoạt.</p>
                            </div>
                            <div className={style['flex']}>
                                <div className={style['arrow']}></div><p>Hỗ trợ giảm đau nhức do viêm khớp thoái hóa khớp.</p>
                            </div>
                        </div>
                        <div className={style['flex']}>
                            <div className={style['jointlab-img']}></div>
                            <div className={style['sale-img']}></div>
                            <div className={style['price-img']}></div>
                        </div>
                    </div>

                    <div>
                        <div className={style['first-section']}>
                            <p className={style['first-element']}>Bạn đang đau khớp hay đau lưng?</p>
                            <p className={style['second-element']}>Jointlab viên uống hỗ trợ khớp vận động linh hoạt.</p>
                        </div>
                        <div className={style['second-section']}>
                            <p className={style['date']}>ƯU ĐÃI KẾT THÚC SAU</p>
                            <p className={style['time']}>00:00:00</p>
                        </div>

                        <div className={style['third-section']}>
                            <div className={style['cont-inp']}><input /></div>
                            <div className={style['cont-inp']}><input /></div>
                            <div className={style['third-btn']}><p>Đặt mua ngay</p></div>
                            <div>
                                <div className={style['flex']}>
                                    <div className={style['arrow']}></div><p>Freeship toàn quốc - Thanh toán khi nhận hàng</p>
                                </div>
                                <div className={style['flex']}>
                                    <div className={style['arrow']}></div><p>Giảm 10% với các giao dịch thanh toán qua
                                        chuyển khoản.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FirstSection;