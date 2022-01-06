import React, {useState} from "react";
import UserProvider from "../contexts/UserProvider";
import CookiesPolicy from "../cookies/CookiesPolicy";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PrivacyPolicy from "../policy/PrivacyPolicy";

export const Layout = React.memo(({children}) => {
    const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
    const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);
    return(
        <div style={{position : 'relative', overflow : "hidden"}}>
            <Header/>
                {children}
            <Footer handleOpenPrivacyPolicy = {() => {setPrivacyPolicyOpen(true)}} handleOpenCookiePolicy = {() => {setCookiePolicyOpen(true)}}/>
            <PrivacyPolicy isOpen={privacyPolicyOpen} handleClose={() => {setPrivacyPolicyOpen(false)}}/>
            <CookiesPolicy isOpen={cookiePolicyOpen} handleClose={() => {setCookiePolicyOpen(false)}}/>
            {/* </UserProvider> */}
        </div>
    )
});