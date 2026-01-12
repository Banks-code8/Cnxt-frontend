// 'use client';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import MainButon from '../button/MainButon';
// import { Drawer } from 'rizzui';

// const MobileNav = () => {
//   const [drawerState, setDrawerState] = useState(false);
//   return (
//     <>
//       {/*
//       <button
//         onClick={() => setDrawerState(false)}
//         className="flex flex-col gap-8 bg-black md:hidden"
//       > </button>
//         <Drawer isOpen={drawerState} onClose={() => setDrawerState(false)}>
//           <div className="justify between flex">
//             {' '}
//             <h1>CnxtHub</h1> <button>close</button>
//           </div>
//           <nav>
//             {' '}
//             <ul className="flex flex-col gap-4">
//               <li>Why Us</li>
//               <li>About Us</li>
//               <li>Markets</li>
//             </ul>
//           </nav>
//           {/* sign up */}
//           {/* <Link href={'/'}>
//             {' '}
//             <MainButon text={'register'} />{' '}
//           </Link>{' '} */}
//         {/* </Drawer> */} */}
//     </>
//   );
// };

// export default MobileNav;
'use client';

import { useState } from 'react';
import { Drawer } from 'rizzui';
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


export default function MobileNav() {  
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
<div onClick={()=> setDrawerState(true)} className='md:hidden block'>
  <RiMenu3Fill size={40} />

</div>
      <Drawer isOpen={drawerState} onClose={() => setDrawerState(false)}  placement="left"
        size="sm">
       <div onClick={()=> setDrawerState(false)} className='bg-mainWhite min-h-full'>
<IoClose size={40}/>

</div> 
      </Drawer>
    </>
  );
}
