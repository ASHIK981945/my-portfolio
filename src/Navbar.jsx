import React from 'react'

const Navbar = () => {
  const navlist=["Home","About me","constact","Resume","project"];
  return (
    <nav class="border-2  py-6 mx-auto w-1/2 rounded-full b-5 mt-5">
      <ul className='flex gap-4 justify-around'>
        {navlist.map((item) => (
          <li className="text-white hover:text-blue-950 hover:scale-110
           translate-all duration-100" key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar
