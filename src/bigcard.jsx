


const BigCard = ({title,font,bigImg,wan,two,sre}) =>{
    return (
        <div className="bigcard  mt-[40px]" >

        <div className=" flex justify-center">
        <div className="top flex items-center gap-[40px]">  
                <div className="left mt-[140px] ">
                    <h1 className="uppercase text-[30px]">{title}</h1>
                    <p className="w-[370px]  mt-[20px] leading-[30.6px] text-[18px] ">
                        {font}
                    </p>
                </div>
                <div className="right mt-[100px]">
                    <img src={bigImg} className="w-[760px] h-[384px] object-cover " alt="eror 440 sorry" />
                </div>
             </div>

        </div>


             
             <div className="buttom flex justify-center gap-[38px]  mt-[38px]">
                <div className="wan">
                    <img src={wan} className="w-[370px] h-[186px] object-cover" alt="eror 400 sorry" />
                </div>

                <div className="twq">
                    <img src={two} className="w-[361px] h-[186px] object-cover" alt="eror 400 sorry" />
                </div>
                <div className="sre">
                    <img src={sre} className="w-[361px] h-[186px] object-cover" alt="eror 400 sorry" />
                </div>
            </div>

        </div>
    )
}

export default BigCard