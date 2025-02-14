import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px] rounded-full' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore in non itaque sunt dignissimos at, dolorum commodi architecto dolore nostrum explicabo? Iusto officia corporis qui provident, consequatur suscipit ipsam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quos illum sit omnis suscipit, sunt vel magni molestiae quibusdam architecto! Vitae laborum suscipit voluptas voluptates quas, aspernatur consectetur amet a?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptates voluptatibus. elit quos illum sit omnis suscipit, sunt vel magni molestiae quibusdam architecto! Vitae laborum suscipit voluptas voluptates quas, aspernatur consectetur amet a</p>
        </div>
      </div>

      <div className='text-4xl py-4 text-center'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border md:border-0'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a repellendus ad eaque, doloremque vitae ipsam suscipit maiores esse consectetur non nihil error sequi perferendis quam tempora excepturi fugit facere.</p>
        </div>

        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border md:border-0'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a repellendus ad eaque, doloremque vitae ipsam suscipit maiores esse consectetur non nihil error sequi perferendis quam tempora excepturi fugit facere.</p>
        </div>

        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border md:border-0'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint a repellendus ad eaque, doloremque vitae ipsam suscipit maiores esse consectetur non nihil error sequi perferendis quam tempora excepturi fugit facere.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
