function numberVotes(){
    return Math.floor((Math.random()*50)+15);
    return 1;
}

const children=[
    {
        id:1,
        firstName:"First name: Mama ",
        lastName:"Last name: Melo",
        gender:"Gender: female",
        img:"http://cliparts101.com/files/411/E770FAE580CF6B2EE421EF508C22E970/Redhead_anime_girl.png",
        votes:numberVotes(),
        // toysNum:1
    },
    {
        id:2,
        firstName:"First name: Papa",
        lastName:"Last name: Melo",
        gender:"Gender: male",
        img:"http://www.cliparts101.com/files/253/66B8F42DCA565D515FFB4942B380210C/Man_Face_Cartoon.png",
        votes:numberVotes(),
        // toysNum:4
    },
    {
        id:3,
        firstName:"First name: girl",
        lastName:"Last name: Melo",
        gender:"Gender: female",
        img:"http://3.bp.blogspot.com/--_W9N59biRY/UNYglTlsMZI/AAAAAAAABYE/x3ZOTfNUcwA/s1600/manga_girl6.png",
        votes:numberVotes(),
        // toysNum:5
    },
    {
      id:4,
      firstName:"First name: boy",
      lastName:"Last name: Melo",
      gender:"Gender: male",
      img:"http://images.clipartpanda.com/face-clip-art-TN_boy_smiling_face.jpg",
      votes:numberVotes(),
      // toysNum:5
    }

];
export{children,numberVotes};
