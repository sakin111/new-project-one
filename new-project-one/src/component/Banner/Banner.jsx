import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="carousel carousel-center mt-24 min-w-[1000px] max-h-[600px] space-x-4  rounded-box mx-36
            ">
                <div id="item1" className="w-full  carousel-item relative ">
                    <img src="https://i.ibb.co/phxncFy/98.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item5" className="btn btn-circle">❮</a>
                        <a href="#item2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item2" className="carousel-item  w-full  relative ">
                    <img src="https://i.ibb.co/fXfZbcK/Free-Fire-kicks-off-The-New-Beginning-in-game-event-Game-Freaks-365.jpg" className="" />
                
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item1" className="btn btn-circle">❮</a>
                        <a href="#item3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full  relative ">
                    <img src="https://i.ibb.co/qFfsqJ2/How-To-Watch-Call-of-Duty-Next-Modern-Warfare-2-Beta-Updates.jpg" className="" />
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item2" className="btn btn-circle">❮</a>
                        <a href="#item4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src="https://i.ibb.co/YkNrsdp/Fortnite-Loading-Screen-Wallpaper.jpg" className="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item3" className="btn btn-circle">❮</a>
                        <a href="#item5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item5" className="carousel-item w-full  relative">
                    <img src="https://i.ibb.co/6JFRdNB/Battlefield-2042-Standard-Edition-PC-Code-Origin.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item4" className="btn btn-circle">❮</a>
                        <a href="#item1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;