import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='/Resume - Alfrethanov Christian Wijaya.pdf' target='_blank' className='flex flex-row text-white items-center gap-x-2 pb-14 pt-4'>
        <span className='text-Snow'><b>My Resume</b></span>
        <span>{icon}</span>
      </Link>
    </>
  ); 
};

export default Download;
