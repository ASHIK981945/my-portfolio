import Button from "./Button";
import Myphoto from './assets/1713701409406.jpg'
const Hero = () => {
  return (
    <div class="  flex flex-col items-center text-center  text-white">
    <img src={Myphoto} alt="myphoto" class="w-20 h-50 rounded-full"/>
      <h1 class="text-3xl font-semibold ">Hi,I'm Ashik🖐️ </h1>
       <h2 class="text-lx font-medium" > Fullstack Developer</h2>
      <p class="text-justify w-3/4">I'm ashik ,a fullstack Developer with the goal of advancing my career
        and participating in inspiring project. Hwrw I present my work and my passion for web Developer.
        Lets shape digital solutions together and shape the future ! </p>

      <div className="flex gap-4 justify-center">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;