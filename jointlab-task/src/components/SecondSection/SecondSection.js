import style from './SecondSection.module.css';

const SecondSection = () => {
    return (
        <div className={style['wrapper-main']}>
            <div className={style['wrapper']}>
                <p className={style['title']}>Mỗi Năm Hàng Ngàn Người Tàn Tật Do </p>
                <p className={style['heading']}>BỆNH XƯƠNG KHỚP</p>

                <div className={style['flex']}>
                    <div className={style['first-section']}>
                        <div className={style['first-square']}>
                            <p className={style['first-square-first-element']}>80%</p>
                            <p className={style['first-square-second-element']}>Người trên 55 tuổi bị Thoái Hóa Khớp</p>
                        </div>
                        <div className={style['second-square']}>
                            <p className={style['second-square-first-element']}>Hàng tỷ đồng</p>
                            <p className={style['second-square-second-element']}>Tiền viện phí cho bệnh về Xương Khớp</p>
                        </div>
                    </div>
                    <div className={style['second-section']}></div>



                    <div className={style['third-section']}>
                        <div className={style['third-square']}>
                            <p className={style['third-square-first-element']}>10.1triệu</p>
                            <p className={style['third-square-second-element']}>Số người già tại Việt Nam - chiếm 11% dân số</p>
                        </div>
                        <div className={style['fourth-square']}>
                            <p className={style['fourth-square-first-element']}>2.5 triệu</p>
                            <p className={style['fourth-square-second-element']}>Người mắc chứng đau lưng</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );

}

export default SecondSection;