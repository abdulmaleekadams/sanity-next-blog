import Image from 'next/image';
import React from 'react';

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2'>
      <Image
        src='https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/278897634_4931259496928283_6747193395694203611_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=DgMSNQx7pYAAX9QhH77&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB_TTmAEPABIcaomjXsODzbb1Vo-N0OtINbyV3d-NdNKg&oe=6569B73F&_nc_sid=ee9879'
        className='rounded-full object-cover'
        alt='Logo'
        width={50}
        height={50}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
};

export default Logo;
