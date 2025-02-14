
const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now and get 10% off your first purchase!</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      </p>

      <form className="w-full sm:w-1/2 flex items-center gap-3 
            mx-auto my-6 border rounded-xl pl-3" onSubmit={onSubmitHandler}>
        <input className="w-full sm:flex outline-none" 
            type="email" placeholder="Enter email" required />

            <button className="bg-gray-800 hover:bg-gray-600 
                text-white text-xs py-4 px-10 rounded-xl" type="submit">
                    SUBSCRIBE
            </button>
      </form>
    </div>
  );
}

export default NewsletterBox;
