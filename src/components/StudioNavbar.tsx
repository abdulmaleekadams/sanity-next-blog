import Link from 'next/link';
import { PiArrowUUpLeftBold } from 'react-icons/pi';
const StudioNavbar = (props:any) => {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-[#F7AB0A] flex items-center'>
          <PiArrowUUpLeftBold className='h-6 w-6 text-[#F7AB0A] mr-2' />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
