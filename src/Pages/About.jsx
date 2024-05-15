import React from 'react'

const  About = () => {
  return (
    <div className='bg-[#0B373C] flex lg:flex-row flex-col items-center overflow-x-hidden'>
 
<div className='flex lg:flex-row flex-col justify-center gap-[4.4rem] items-center w-screen'>

    <div class=''>
    <p className='text-[#35caaa83] font-extrabold text-center text-xl'>Our Vision</p>
        <p className='text-[#E3FFCC] lg:text-left text-center lg:leading-[3rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />
            ipsum quae tenetur totam exercitationem quam architecto nulla <br />
            sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br />
            libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br />
            ratione praesentium voluptatibus laudantium ipsa, mollitia,<br />
            illo dolores iure nemo in aspernatur aliquam dignissimos.
        </p>
    </div>
        <img class='lg:w-[40%] w-[90%] lg:max-w-[40%]' src="src\assets\images\about-1.png" />
</div>


<div className='container flex lg:flex-row-reverse flex-col justify-center w-screen gap-[4.4rem] items-center mt-[3rem]'>
    <div class=''>
        <p className='text-[#E3FFCC] lg:text-left text-center lg:leading-[3rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />
            ipsum quae tenetur totam exercitationem quam architecto nulla <br />
            sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br />
            libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br />
            ratione praesentium voluptatibus laudantium ipsa, mollitia,<br />
            illo dolores iure nemo in aspernatur aliquam dignissimos.
        </p>
    </div>
        <img class='lg:w-[40%] w-[90%]' src="src\assets\images\about-2.png" />
</div>

<div className='container  flex lg:flex-row flex-col justify-center w-screen gap-[4.4rem] items-center mt-[3rem]'>
    <div >
        <p className='text-[#E3FFCC] lg:text-left text-center lg:leading-[3rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />
            ipsum quae tenetur totam exercitationem quam architecto nulla <br />
            sapiente assumenda cum. Laborum culpa quidem tempore eius veniam <br />
            libero adipisci molestias quisconsequatur modi? Est, a magnam? Non,<br />
            ratione praesentium voluptatibus laudantium ipsa, mollitia,<br />
            illo dolores iure nemo in aspernatur aliquam dignissimos.
        </p>
    </div>
        <img class='lg:w-[40%] w-[90%]' src="src\assets\images\about-3.png" />
</div>
</div>
    
  )
}

export default About