import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileHero from '../../src/components/profile/ProfileHero';

export default function Profile(){
    return(
    <>
    <Header/>
    <ProfileHero image="https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg"/>
    <Footer/>
    </>
    );
}