import Image from "next/image";

export default function Home() {
  return (


<div>


<header class="bg-pink-800 text-white">
  <nav class="container mx-auto px-6 py-3 flex justify-between">
    <a href="#" class="text-4xl font-bold font-italic">TechStart</a>
    <ul class="hidden md:flex items-center space-x-4">
      <li><a href="#" class="hover:text-green-300">Home</a></li>
      <li><a href="#" class="hover:text-green-300">About</a></li>
      <li><a href="#" class="hover:text-green-300">Services</a></li>
      <li><a href="#" class="hover:text-green-300">Contact</a></li>
    </ul>
    
  </nav>
  </header>

  
<div class="mt-10">
  <section class="container mx-auto px-6 py-20 flex flex-col items-center">
    <h1 class="text-5xl font-bold mb-6">Introduction to TechStart </h1>
    <p class="text-xl mb-4">Where ideas meet innovation </p>
    <p class="text-xl mb-8">Your trusted tech advisor</p>
    <button class="bg-orange-500  text-white font-bold py-2 px-4 rounded">Get Started</button>
  </section>
</div>

<section class="bg-gray-100 py-20">
  <div class="container mx-auto px-6 flex flex-wrap justify-center">
    <div class="w-full md:w-1/3 xl:w-1/3 p-6">
      <div class="bg-white rounded shadow-md p-6">
        <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6 2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
        <h2 class="text-lg font-bold mb-2">Web Development</h2>
        <p class="text-gray-600">We build fast, scalable, and secure web applications</p>
      </div>
    </div>
    </div>

    <main class="container mx-auto py-8">
    <section class="bg-white rounded-lg shadow-md py-8 px-4 mb-8">
      <h2 class="text-3xl font-bold mb-4">Our Services</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
          <i class="fas fa-code text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">Web Development</h3>
          <p class="text-lg">Expert web development services for businesses.</p>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
          <i class="fas fa-mobile-alt text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">Mobile App Development</h3>
          <p class="text-lg">Build innovative mobile apps for iOS and Android.</p>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
          <i class="fas fa-chart-line text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">Data Analytics</h3>
          <p class="text-lg">Unlock insights with our data analytics solutions.</p>
          </div>
      </div>
    </section>
    <section class="bg-blue rounded-lg shadow-md py-8 px-4 mb-8">
      <h2 class="text-3xl font-bold mb-4 bg-blue">About Us</h2>
      <p class="text-lg">We're a team of experts passionate about delivering innovative tech solutions. 
At [TechStart], we're passionate about harnessing technology to drive innovation and growth. Our story began with a simple yet ambitious vision: to empower businesses and individuals to thrive in the digital age.
</p>
    </section>
  </main>


    <footer class="bg-pink-900 text-white py-4 mt-10">
    <div class="container mx-auto flex justify-between">
      <div class="flex items-center">
        <span class="text-lg">Contact Us:</span>
        <ul class="ml-4">
          <li class="mr-4"><a href="#" class="text-lg">block27 Tonimas plaza Awka, Anambra state</a></li>
          <li class="mr-4"><a href="#" class="text-lg">(123) 456-7890</a></li>
          <li><a href="#" class="text-lg">info@techstart.com</a></li>
        </ul>
      </div>
      <div class="flex items-center">
        <span class="text-lg">Follow Us:</span>
        <ul class="ml-4 flex">
          <li class="mr-4"><a href="#" class="text-lg"><i class="fab fa-facebook-f"></i></a></li>
          <li class="mr-4"><a href="#" class="text-lg"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#" class="text-lg"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>

    


    </section>
    <footer>



    </footer>
    


</div>
  );
}
 