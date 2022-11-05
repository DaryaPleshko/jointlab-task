import FirstSection from "../../components/FirstSection/FirstSection";
import SecondSection from "../../components/SecondSection/SecondSection";
// import Footer from "../../components/Footer/Footer";
import style from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={style['main-page']}>
            <div className={style['branch']}>
                <FirstSection />
                <SecondSection />
                {/* <Footer /> */}
            </div>
        </div>
    );

}
export default MainPage;