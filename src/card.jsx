


const Card = ({img,title,font,btn}) =>{
    return(
        <div className="card w-[450px] bg-[black]h-[590px] rounded-[3px]  text-[white] ">
        <div className="flex items-center flex-col pt-[30px]"   >
        <img src={img} alt="eror 404 sorry"  className="w-[400px] h-[300px] object-cover  rounded-[3px] " />
        </div>
       
       <div className="flex flex-col items-start ml-[26px] gap-[20px] mt-[30px] ">

          <h1 className="text-[27px] ">{title}</h1>
             <p className="w-[295px]">{font}</p>
             <button className="border-white border-solid border-[1px] p-[6px] w-[250px]  active:scale-[.9]  transition-all duration-300 delay-50 ease-linear text-[18px] ">
                {btn}
             </button>
       </div>

        </div>
    )
}

export default Card