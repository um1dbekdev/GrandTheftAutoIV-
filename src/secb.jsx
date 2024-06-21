import Card from "./card"



const Scbt = () =>{
    return(
       <div className="flex justify-center bg-[black]">
         <div className="scbtn grid grid-cols-3 gap-10 mt-[60px]  ">
            <Card  img={"https://vkplay.ru/hotbox/content_files/news/2019/11/13/f06f1d472c8e4c34b7720bcb3d2af597.jpg"} 
            title={'Arthur Morgan'}
            font={'Rockstar Games development team, unlike their previous projectDevelopment team from  i\'m '}
            btn={'more details'}/>
            

            <Card  img={"https://www.pcgamesn.com/wp-content/uploads/2019/11/wolf.jpg"} 
            title={'Golden Card In Beads'}
            font={'US states at the turn of the 19th and 20th centuries. The game\'s plot is built around the adventures oer controls one'}
            btn={'more details'}/>

            <Card  img={"https://cdn.shazoo.ru/512181_GxkPYNRohD_156976778_469591581066238_4949652423594572082_n.jpg"} 
            title={'Marshall\'s Sister'}
            font={'storyline to the epilogue - another gang member, John Marston. After a botched ferry robbery, bandits '}
            btn={'more details'}/>


            <Card  img={"https://www.nim.ru/i/800_450/publications/34427/recenziya-red-dead-online-1551-34427.jpg"} 
            title={'Bizumitz'}
            font={'Dead Redemption 2 allows the player to freely travel through the vast world of the game, independently '}
            btn={'more details'}/>


            <Card  img={"https://img.zoneofgames.ru/news/2019/12/09/130732-73a2ad9343c03c44_1920xH.jpg"} 
            title={'Robbery Of Еhe Сentury'}
            font={'action-adventure and open-world third-person shooter developed by Rockstar Studios and released mony '}
            btn={'more details'}/>



            <Card  img={"https://images.stopgame.ru/news/2018/10/24/RQwt0jqk5.jpg"} 
            title={'Misnik Walker'}
            font={'computers running Windows on November 5, 2019. It is the third game in the Red Dead series '}
            btn={'more details'}/>



            <Card  img={"https://img.zoneofgames.ru/news/2018/10/26/234536-291323_M96pJ7PrYv_rdr.jpg"} 
            title={'Hitler\'s Mission'}
            font={'At some point in the game, the player will have to decide which path to take, since most equipment'}
            btn={'more details'}/>


            <Card  img={"https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/bltc3146f770fbb3575/64491e75aaf9d19f25c9f63a/red_dead_sad.jpg"} 
            title={'Death On Everest'}
            font={'certain honor level. The level of honor also determines how the outside world will perceive the protagonist'}
            btn={'more details'}/>
        </div>
       </div>
    )
}


export default Scbt