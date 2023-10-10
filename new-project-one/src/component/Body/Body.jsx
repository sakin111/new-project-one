import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Body = () => {



    useEffect(() => {
        AOS.init({
          duration: 1000 
        });
      }, []);




    return (
        <div>
            <div className=" gap-9 mx-auto ml-32" >
                <div data-aos="fade-up" className="w-[500px] mt-32 drop-shadow-2xl bg-slate-200 p-10 rounded-lg">
                    <h2 className="text-2xl text-slate-950"> Tournaments</h2>
                    <p className="text-sm font-serif text-slate-950 mt-7"> Show off your skills and compete in thrilling gaming tournaments with cash prizes and exclusive swag up for grabs.</p>
                </div>


                <div data-aos="fade-up" className="w-[500px] mt-36 ml-[700px] drop-shadow-2xl bg-[#0A2444] p-10 rounded-lg">

                    <h2 className="text-2xl text-slate-50"> Game Demos</h2>
                    <p className="text-sm font-serif text-slate-50 mt-7"> Be among the first to test out the latest and greatest games from top developers..</p>
                </div>


                <div data-aos="fade-up" className="w-[500px] drop-shadow-2xl bg-slate-200 p-10 rounded-lg">
                    <h2 className="text-2xl text-slate-950"> Cosplay Contest</h2>
                    <p className="text-sm font-serif text-slate-950 mt-7">  Dress up as your favorite gaming character and enter our cosplay competition.</p>
                </div>


                <div data-aos="fade-up" className="w-[500px] drop-shadow-2xl mt-36  ml-[700px] bg-[#0A2444] p-10 rounded-lg">
                    <h2 className="text-2xl text-slate-50">  VR Experiences</h2>
                    <p className="text-sm font-serif text-slate-50 mt-7"> Immerse yourself in virtual reality gaming experiences that will blow your mind.</p>
                </div>


                <div data-aos="fade-up" className="w-[500px] drop-shadow-2xl bg-slate-200 p-10 rounded-lg">
                    <h2 className="text-2xl text-slate-950">  Meet & Greet</h2>
                    <p className="text-sm font-serif text-slate-950 mt-7">Get a chance to meet popular gaming influencer and industry professionals.</p>
                </div>

                <div data-aos="fade-up" className="w-[500px] drop-shadow-2xl mt-36  ml-[700px] bg-[#0A2444] p-10 rounded-lg">
                    <h2 className="text-2xl text-slate-50">  Community</h2>
                    <p className="text-sm font-serif text-slate-50 mt-7">  Connect with fellow gamers, make new friends, and share your passion for gaming.</p>
                </div>
            </div>
        </div>
    );
};

export default Body;