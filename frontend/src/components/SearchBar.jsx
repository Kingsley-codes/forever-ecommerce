import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';


const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

   

  return showSearch ? (
    <div className='text-center'>
        <div className='inline-flex bg-gray-50 items-center justify-center 
            border border-gray-400 px-5 py-2 mx-3 mb-4 rounded-full w-3/4
            sm:w-1/2'>
                <input value={search} type="text" placeholder='Search' 
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm ' />
                
                <img src={assets.cross_icon} onClick={()=> setShowSearch(false)}
                    className='inline w-3 cursor-pointer mr-3' alt="" />
                
                <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        
    </div>
  ) : null;
}

export default SearchBar
