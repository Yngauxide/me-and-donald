import Nav from "../Components/nav"
import Home1 from '../assets/images/home-1.png'
import Home2 from '../assets/images/Home-2.png'
import Home3 from '../assets/images/home-5.png'
import Home6 from '../assets/images/home-6.png'
import Home7 from '../assets/images/home-7.png'
import Home8 from '../assets/images/home-8.png'
import Home10 from '../assets/images/home-10.png'
import Home11 from '../assets/images/home-11.png'
import Home12 from '../assets/images/home-12.png'
import Home13 from '../assets/images/Home-13.png'
import Home14 from '../assets/images/Home-14.png'
import Home15 from '../assets/images/Home-15.png'
import Home16 from '../assets/images/Home-16.png'
import Home17 from '../assets/images/Home-17.png'
import Home18 from '../assets/images/Home-18.png'
import Home19 from '../assets/images/Home-19.png'
import Home20 from '../assets/images/Home-20.png'
import Home21 from '../assets/images/Home-21.png'
import Home22 from '../assets/images/Home-22.png'
import Like from '../assets/images/Like.png'
import view from '../assets/images/View.png'
const Home = () => {
    const Posts = [
        {name: 'oneTwo', image: Home6, Likes: '252', Views: '2.3K'},
        {name: 'MINAS HOUSE', image: Home7, Likes: '252', Views: '2.3K'},
        {name: 'NUMAI', image: Home8, Likes: '252', Views: '2.3K'},
        {name: 'NIO ET5T in Tsingtao', image: Home20, Likes: '252', Views: '2.3K'},
        {name: 'Granirecta', image: Home21, Likes: '252', Views: '2.3K'},
        {name: 'Oo Kido - Lifetime', image: Home22, Likes: '252', Views: '2.3K'}
    ]
    return (
        <>
        <div className="bg-[#0B373C] overflow-x-hidden">
        <div className="flex lg:flex-row flex-col lg:text-left text-center justify-center lg:justify-around items-center">
            <div className="flex flex-col lg:gap-8 gap-4 lg:items-start items-center">
            <h1 className="font-normal lg:text-[4.2rem] text-[3rem] lg:w-[24rem] text-[#1AA47B]">Your Hub for Limitless</h1>
            <p className="text-[#1AA47B] w-[22rem] leading-8 text-lg">Whether you’re a creator looking for your next brand deal, or a marketer hiring creators for your next, you'll find them on Think Creative Hub.</p>
            <button className="py-3 px-4 rounded-3xl border font-semibold bg-[#E3FFCC]">Get Started</button>
            </div>
            <img className="w-[34rem] py-5" src={Home1} alt="Image" />
        </div>
        <div className="lg:relative flex lg:flex-row  items-center justify-center gap-14 mt-20">
            <img className="w-[32rem] lg:flex hidden" src={Home2} alt="" />
            <img className="w-[20rem] h-[20rem] lg:absolute hidden top-[21.5rem] left-[25rem] " src={Home3} alt="" />

            <div className="flex flex-col items-center gap-10">
                <h2 className="text-[#E3FFCC] text-2xl font-medium lg:text-left text-center">Explore Our Community <br /> And Services</h2>
                <p className="text-[#BACFC2] lg:text-left text-center lg:w-[30rem]">Manage and tailor customer messages within one unified
                platform. Because when powered by data, it’s more than a
                message, it’s a relationship.</p>
                
                <section className="text-[#BACFC2] flex flex-col gap-16">
                    <div className="flex items-center gap-3">
                        <img src={Home10} alt="" />
                        <span>
                            <h4 className="text-[#18A57B] font-bold">BRAND</h4>
                            <p className="w-[22rem]">Craft and automate messages with unmatched
                            flexibility and customization.</p>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={Home11} alt="" />
                        <span>
                            <h4 className="text-[#18A57B] font-bold">CREATE</h4>
                            <p className="w-[22rem]">Collect and route your first-party data to all the tools
                            you use to drive growth.</p>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={Home12} alt="" />
                        <span>
                            <h4 className="text-[#18A57B] font-bold">INSPIRE</h4>
                            <p className="w-[22rem]">Code, preview, and collaborate using the development
                            platform designed for email.</p>
                        </span>
                    </div>
                </section>
            </div>
        </div>

            <div className="grid lg:grid-cols-3 text-[0.6rem] grid-cols-2  mx-auto lg:text-[0.9rem] text-[#E3FFCC] place-items-center">
                {Posts.map((post, index) => (
                    <div  key={index}>
                         <div>
                             <img className="lg:w-[17rem] h-[10rem] w-[10rem] py-4" src={post.image} alt="" />
                                  <span className="flex justify-between font-medium">
                                  <h4 className="flex flex-wrap">{post.name}</h4>
                                     <span className="flex items-center gap-2">
                                  <h4 className="flex gap-2 items-center justify-between"><img src={Like} alt="" />{post.Likes}</h4>
                                <h4 className="flex gap-2 items-center justify-between"><img src={view} alt="" />{post.Views}</h4>
                            </span>
                        </span>
                        </div>
                    </div>
                ))}
            </div>
        <div className="flex justify-center py-2 mt-7 items-center gap-2 lg:gap-[4rem]">
            <img className="w-12 lg:w-24" src={Home13} alt="" />
            <img className="w-12 lg:w-24" src={Home14} alt="" />
            <img className="w-12 lg:w-24" src={Home15} alt="" />
            <img className="w-12 lg:w-24" src={Home16} alt="" />
            <img className="w-12 lg:w-24" src={Home17} alt="" />
            <img className="w-12 lg:w-24" src={Home18} alt="" />
            <img className="w-12 lg:w-24" src={Home19} alt="" />
        </div>
        <hr className="border border-gray-600" />

                    <div className="py-6">
              <div className="bg-[#D0FFF1] lg:w-[65rem] lg:text-lg text-xs mx-auto rounded-lg mt-7 py-16 lg:p-20 justify-around flex items-center">
            <h1>Join the Hub. Find your next inspiration.</h1>

            <span className="flex gap-3">
            <button className="lg:py-3 lg:px-8  px-2 py-2 rounded-3xl font-semibold bg-[#0B373C] text-[#1AA47B]">Explore</button>
            <button className="lg:py-3 lg:px-4  px-2 py-2 rounded-3xl border-[#0B373C] border-2 font-semibold bg-[#E3FFCC]">Get Started</button>
            </span>
        </div>
        </div>
        </div>
        </>
    )}
export default Home