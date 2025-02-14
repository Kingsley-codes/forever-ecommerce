import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='border-gray-300 rounded-full border-4 w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'> 57453 Willms Station <br /> Suite 350, Washington</p>
          <p className='text-gray-500'>Tel: +234 (0) 813 403 8304 <br /> Email: admin@foreverng.com</p>
          <p className='font-semibold text-xl text-gray-600'></p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-3 text-sm hover:bg-black rounded-md hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
