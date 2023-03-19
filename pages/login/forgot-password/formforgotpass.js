export default function forgotpass(){
    return(
        <>
         <div classname="p-4 w-full  ">
        <form class="flex flex-col w-full px-4">
        <div class="mb-10">
            <label class="font-bold text-base mb-2" for="">
             Email
            </label>
            <input
              className="w-full rounded-3xl border py-4 px-6 "
              placeholder="yourmail@mail.com"
            />
          </div>

         
          <button class ="w-full text-base rounded-xl font-bold text-white text-center py-2.5 border-2 border-btn bg-btn">
            Submit
          </button>
        </form>
       
      </div>
        </>
    )
}