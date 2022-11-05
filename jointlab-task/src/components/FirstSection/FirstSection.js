import style from './FirstSection.module.css';

const FirstSection = () => {
    return (
        <div className={style['wrapper']}>
            <div className={style['container']}>
                <div>
                    <h1 className={style['logo']}>Jointlab</h1>
                    <div className={style['about-jointlab']}>
                        <div><p>Hỗ trợ bổ sung dưỡng chất cho khớp sụn.</p></div>
                        <div><p>Hỗ trợ giúp khớp vận động linh hoạt.</p></div>
                        <div><p>Hỗ trợ giảm đau nhức do viêm khớp thoái hóa khớp.</p></div>
                    </div>
                    <div className={style['flex']}>
                        <div className={style['jointlab-img']}></div>
                        <div className={style['sale']}></div>
                        <div className={style['price']}></div>
                    </div>
                </div>



                <div>
                    <div className={style['']}></div>
                    <div className={style['']}></div>
                    <div className={style['']}></div>
                </div>
            </div>
        </div>
    );

}

export default FirstSection;