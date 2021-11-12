import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ProfileHero from '../../src/components/profile/ProfileHero';
import ProfileUser from '../../src/components/profile/ProfileUser';
import ProfileCollectionFilters from '../../src/components/profile/ProfileCollectionFilters';
import ProfileCollection from '../../src/components/profile/ProfileCollection';

export default function Profile(){
    
    return(
    <div style={{position:'relative'}}>
    <Header/>
    <ProfileHero image="https://t4.ftcdn.net/jpg/02/98/58/41/360_F_298584167_WLdKSUF4ZpQxLe4dX1div4tvC41Nd9N0.jpg"/>
    <ProfileUser 
    name="George"
    avatar="https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg"
    verified={true}
    info="What are they they are the broken promise and to do is out of reach. Hand over the candy notes food is so expensive to the Cashier."
    />
    {/* <ProfileCollectionFilters 
        filters = {{
            sort: [
              { label: "Name (Ascending)", value: 1 },
              { label: "Name (Descending)", value: 2 },
              { label: "Price (Ascending)", value: 4 },
              { label: "Price (Descending)", value: 5 },
            ],
            price: [
              { label: "0.3 - 0.5 ETH", value: 6 },
              {
                label: "0.5 - 2 ETH",
                value: 7,
              },
              {
                label: "2- 3 ETH",
                value: 8,
              },
            ],
          }
      }
    /> */}
    <ProfileCollection 
    filters = {{
        sort: [
          { label: "Date (Ascending)", value: 1 },
          { label: "Date (Descending)", value: 2 },
          { label: "Name (Ascending)", value: 3 },
          { label: "Name (Descending)", value: 4 },
          { label: "Price (Ascending)", value: 5 },
          { label: "Price (Descending)", value: 6 },
        ],
        price: [
          { label: "0 - 0.01 ETH", value: 7 },
          {
            label: "0.01 - 0.04 ETH",
            value: 8,
          },
          {
            label: "0.04 - 0.07 ETH",
            value: 9,
          },
        ],
      }
    }
    user = {
        {
            id: 401,
            username: "Brannon.Doyle29",
            email: "Gerard31@hotmail.com",
            info: "Default role given to authenticated user.",
            provider: null,
            verified: true,
            blocked: null,
            role: {
              id: 1,
              name: "Authenticated",
              description: "Default role given to authenticated user.",
              type: "authenticated",
            },
            created_at: "2021-10-22T08:29:19.930Z",
            updated_at: "2021-10-22T08:29:19.941Z",
            avatarUrl: "https://nft-auction.herokuapp.com/uploads/0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec.jpg",
            avatar: {
              id: 782,
              name: "0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 134,
              formats: null,
              hash: "0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 4.87,
              url: "https://nft-auction.herokuapp.com/uploads/0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec.jpg",
              backgroundUrl:
                "https://nft-auction.herokuapp.com/uploads/0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              created_at: "2021-10-22T08:29:18.412Z",
              updated_at: "2021-10-22T08:29:18.412Z",
            },
            nftsCount: 5,
          }      
        }
    items = {[
        {
          id: 401,
          name: "Tasty Granite Pizza",
          price: 0.107,
          owner: 401,
          likes: 4459,
          token_id: "0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187.jpg",
          currency: "ETH",
          featured: false,
          auction_end: "2022-08-15T04:27:46.687Z",
          published_at: "2021-10-22T08:29:07.092Z",
          created_at: "2021-10-22T08:29:10.530Z",
          updated_at: "2021-10-22T08:29:19.936Z",
          source: {
            id: 758,
            name: "0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187.jpg",
            alternativeText: null,
            caption: null,
            width: 400,
            height: 279,
            formats: {
              thumbnail: {
                name: "thumbnail_0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187.jpg",
                hash: "thumbnail_0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a",
                ext: ".jpg",
                mime: "image/jpeg",
                width: 224,
                height: 156,
                size: 7.92,
                path: null,
                url: "https://nft-auction.herokuapp.com/uploads/thumbnail_0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a.jpg",
              },
            },
            hash: "0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 18.78,
            url: "https://nft-auction.herokuapp.com/uploads/0x5bcfee9c9baa0597e58aeb3f2de01ebf0aee8187_0365d0161a.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            created_at: "2021-10-22T08:29:05.108Z",
            updated_at: "2021-10-22T08:29:05.108Z",
          },
        },
        {
          id: 427,
          name: "Rustic Soft Shoes",
          price: 1.508,
          owner: 401,
          likes: 1512,
          token_id: "0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e.jpg",
          currency: "ETH",
          featured: false,
          auction_end: null,
          published_at: "2021-10-22T08:29:07.092Z",
          created_at: "2021-10-22T08:29:12.539Z",
          updated_at: "2021-10-22T08:29:19.936Z",
          source: {
            id: 721,
            name: "0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e.jpg",
            alternativeText: null,
            caption: null,
            width: 400,
            height: 225,
            formats: {
              thumbnail: {
                name: "thumbnail_0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e.jpg",
                hash: "thumbnail_0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca",
                ext: ".jpg",
                mime: "image/jpeg",
                width: 245,
                height: 138,
                size: 6.5,
                path: null,
                url: "https://nft-auction.herokuapp.com/uploads/thumbnail_0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca.jpg",
              },
            },
            hash: "0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 12.77,
            url: "https://nft-auction.herokuapp.com/uploads/0x120a3d7dbbc04c14cecff41ee359dc8b800afa7e_e47d64c7ca.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            created_at: "2021-10-22T08:29:03.959Z",
            updated_at: "2021-10-22T08:29:03.959Z",
          },
        },
      ]
  }    
    />

    <Footer/>
    </div>
    );
}