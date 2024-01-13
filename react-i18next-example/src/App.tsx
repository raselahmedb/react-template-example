import './App.css'
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    console.log(language);
    
    i18n.changeLanguage(language).then(() => {
      // You can do something after the language has been changed if needed
    });
}

  return (
    <>
    <div className="align">
        <select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}
        >
        <option value="en" >English</option>
        <option value="bn" >Bangla</option>
        </select>

            <div className="paraStyle">
                {t("line1")} <br/>
                {t("line2")} <br/>
                {t("line3")} <br/>
                {t("line4.l41")} <br/>

                {/* {t("line1", {ns: ['main','home']})} <br/>
                {t("line2", {ns: ['main','home']})} <br/>
                {t("line3", {ns: ['main','home']})} <br/> */}
            </div>
            
        </div>
      
    </>
  )
}

export default App
