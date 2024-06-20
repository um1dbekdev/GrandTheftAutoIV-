

const Header = () =>{
    return(
        <div className="cantainer max-w-[1660px] m-[auto]  ">
        <header className="header  flex   pt-[40px]  items-center  justify-between">
            <div className="left  header flex  items-center justify-between w-[900px]">
            <img src="public\logo.webp" alt="eror 404 sorry" className="w-[400px]" />
                 <nav className="text-[white] gap-[24px] flex"  >
                    <a href="#">Об игре</a>
                    <a href="#">O нас</a>
                    <a href="#">Новости</a>
                    <a href="#">Читы в игры</a>
                    <a href="#">купить</a>
                 </nav>
            </div>
            <div className="right ">
                <input type="search" className="w-[500px] h-[40px] bg-[#ffffff94] rounded-[4px] outline-none pr-[10px] pl-[10px]"/>
            </div>
        </header>
        </div>
    )
}

export default Header