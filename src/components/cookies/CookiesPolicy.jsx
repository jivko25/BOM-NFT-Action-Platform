import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import React, { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookiesPolicy({isOpen, handleClose}){
    const [reachTheEnd, setReachTheEnd] = useState(false);

    const handleScroll = (e) =>{
        const content = e.target
        console.log("move");
        if ((content.scrollTop + content.offsetHeight) >= content.scrollHeight-5) {
            setReachTheEnd(true);
        } 
    }

    return(
        <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Cookies Policy for BOM NFT Auction</DialogTitle>
        <DialogContent onScroll={handleScroll}>
          <DialogContentText>
            <h1>Cookies Policy</h1>
            <span>Last updated: December 20, 2021
            This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the Cookies Policy Generator.
            Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
            We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</span>

            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <span>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</span>

            <h2>Definitions</h2>
            <span>For the purposes of this Cookies Policy:</span>
            <ul>
                <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to BOM NFT Auction.</li>
                <li>Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
                <li>Website refers to BOM NFT Auction, accessible from <span href="https://bom-nft-auction-platform.vercel.app/">https://bom-nft-auction-platform.vercel.app/</span></li>
                <li>You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
            </ul>

            <h1>The use of the Cookies</h1>
            <h2>Type of Cookies We Use</h2>
            <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
            We use both session and persistent Cookies for the purposes set out below</p>
            <ul>
                <li>
                    <strong>Necessary / Essential Cookies</strong>
                    <p>Type: Session Cookies
                    Administered by: Us
                    Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services</p>
                </li>
                <li>
                    <strong>Functionality Cookies</strong>
                    <p>Type: Persistent Cookies
                    Administered by: Us
                    Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                </li>
            </ul>

            <h1>Your Choices Regarding Cookies</h1>
            <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
            If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
            If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
            <ul>
                <li>For the Chrome web browser, please visit this page from Google: <span href="https://support.google.com/accounts/answer/32050">https://support.google.com/accounts/answer/32050</span></li>
                <li>For the Internet Explorer web browser, please visit this page from Microsoft: <span href="http://support.microsoft.com/kb/278835">http://support.microsoft.com/kb/278835</span></li>
                <li>For the Firefox web browser, please visit this page from Mozilla: <span href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</span></li>
                <li>For the Safari web browser, please visit this page from Apple: <span href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</span></li>
            </ul>
            <p>For any other web browser, please visit your web browser's official web pages.</p>
            <h1>More Information about Cookies</h1>
            <p>You can learn more about cookies here: <span href="https://www.termsfeed.com/blog/cookies/">All About Cookies by TermsFeed.</span></p>

            <h1>Contact Us</h1>
            <p>If you have any questions about this Cookies Policy, You can contact us:</p>
            <ul>
                <li>By email: jivkou@yahoo.com</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} disabled={!reachTheEnd}>Agree</Button>
        </DialogActions>
      </Dialog>
    );
}