
import pic from '..//img/1p.png';
export default function Pro(){
    return <section className=" flex flex-col py-5 px-5 justify-center">

       <div className='text-center py-16'>
    <h1 className='text-5xl font-bold border-2  border-black text-center p-4 rounded-full max-w-max mx-auto  hover:text-yellow-500'>
      Projects
    </h1>

    </div>
    <div className="py-20"> {/* Flex container with smaller vertical spacing */}
  
      {/* 1st Box */}
      <div class="  grid place-items-center font-mono">
        <div class="rounded bg-gray-800 shadow-2xl">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none">
              <img
                src={pic}
                class="h-82 w-40 rounded shadow-4xl transform -translate-y-6 border-2 border-gray-300 shadow-lg"
              />
            </div>
            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">Joker (2020)</p>
              <hr class="hr-text" data-content=""/>
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
                In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
              </p>
              <div class="text-xs py-10 pr-32">
                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* 2nd Box */}
      <div class="py-20  grid place-items-center font-mono">
    <div class="rounded bg-gray-800 shadow-2xl">
        <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-col text-gray-300 flex-grow">
                <p class="pt-4 text-2xl font-bold">Joker (2020)</p>
                <hr class="hr-text" data-content="" />
                <div class="text-md flex justify-between px-4 my-2">
                    <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
                </div>
                <p class="hidden md:block px-4 my-4 text-sm text-left">
                    In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
                </p>
                <div class="text-xs py-10 pr-32">
                    <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
                    <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
                    <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
                </div>
            </div>
            <div class="flex-none">
                <img
                    src={pic}
                    class="h-82 w-40 rounded shadow-4xl transform -translate-y-6 border-2 border-gray-300 shadow-lg"
                />
            </div>
        </div>
    </div>
</div>

<div class="  grid place-items-center font-mono">
        <div class="rounded bg-gray-800 shadow-2xl">
          <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-none">
              <img
                src={pic}
                class="h-82 w-40 rounded shadow-4xl transform -translate-y-6 border-2 border-gray-300 shadow-lg"
              />
            </div>
            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl font-bold">Joker (2020)</p>
              <hr class="hr-text" data-content=""/>
              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
                In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
              </p>
              <div class="text-xs py-10 pr-32">
                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
                <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* 2nd Box */}
      <div class="py-20  grid place-items-center font-mono">
    <div class="rounded bg-gray-800 shadow-2xl">
        <div class="md:flex px-4 leading-none max-w-4xl">
            <div class="flex-col text-gray-300 flex-grow">
                <p class="pt-4 text-2xl font-bold">Joker (2020)</p>
                <hr class="hr-text" data-content="" />
                <div class="text-md flex justify-between px-4 my-2">
                    <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
                </div>
                <p class="hidden md:block px-4 my-4 text-sm text-left">
                    In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
                </p>
                <div class="text-xs py-10 pr-32">
                    <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
                    <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
                    <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
                </div>
            </div>
            <div class="flex-none">
                <img
                    src={pic}
                    class="h-82 w-40 rounded shadow-4xl transform -translate-y-6 border-2 border-gray-300 shadow-lg"
                />
            </div>
        </div>
    </div>
</div>

  

  
    </div>
  </section>
}  