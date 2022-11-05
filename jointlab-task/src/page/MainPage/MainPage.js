import Header from "../../components/Header/Header";
import Main from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";
import style from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={style['main-page']}>
            <div className={style['branch']}>
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );

}
export default MainPage;