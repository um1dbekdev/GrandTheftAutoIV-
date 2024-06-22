

const Header = () =>{
    return(
  
     
                    <header style={{boxShadow:'0px 0px 20px 20px #00000099'}}   className="header  text-[#00000099] flex  fixed z-[2] w-[100%]    items-center  justify-between pl-[30px] pr-[30px] bg-[#000000ae] backdrop-blur-[3px] pt-[20px] pb-[20px] ">
            <div className="left  header flex  items-center justify-between w-[740px] ">
            <img src="https://vgboxart.com/resources/logo/15936_red-dead-redemption-2-prev.png"
              alt="eror 404 sorry" className="w-[120px]  " />
 
                 <nav className="text-[white] gap-[24px] flex  p-[15px]  items-center"    >
                    
                    <a href="#" >Overview</a>
               
                    <select className="bg-[transparent] outline-none cursor-pointer ">
                        <option value="" >Explore</option>
                        <option value="" >Progress</option>
                        <option value="" >Media</option>
                        <option value="" >Overview</option>
                    </select>
                    <select className="bg-[transparent] outline-none  cursor-pointer">
                        <option value="" >Progress</option>
                        <option value="" >Explore</option>
                        <option value="" >Explore</option>
                        <option value="" >Explore</option>
                    </select>
                    <select className="bg-[transparent] outline-none  cursor-pointer w-[70px] ">
                        <option value="" >Media</option>
                        <option value="" >Progress</option>
                        <option value="" >Media</option>
                        <option value="" >Overview</option>
                    </select>
                    <a href="#">Online</a> 
                    <a href="#">Catalogue</a>
                 </nav>
            </div>
            <div className="right flex items-center gap-[20px] ">
            <button className="border-white border-solid border-[1px] p-[6px] w-[100px] rounded-[5px] text-white active:scale-[.9]  transition-all duration-300 delay-50 ease-linear ">BUY NOW</button>
            <img  className="w-[28px]" src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt="eror 404 sorry" />
            <img  className="w-[33px]" src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt="eror 404 sorry" />
            </div>
        </header>


    )
}

export default Header