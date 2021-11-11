import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileHero from '../../src/components/profile/ProfileHero';
import ProfileUser from '../../src/components/profile/ProfileUser';

export default function Profile(){
    return(
    <>
    <Header/>
    <ProfileHero image="https://t4.ftcdn.net/jpg/02/98/58/41/360_F_298584167_WLdKSUF4ZpQxLe4dX1div4tvC41Nd9N0.jpg"/>
    <ProfileUser 
    name="George"
    avatar="https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg"
    verified={true}
    info="What are they they are the broken promise and to do is out of reach. Hand over the candy notes food is so expensive to the Cashier."
    />

    <Footer/>
    </>
    );
}