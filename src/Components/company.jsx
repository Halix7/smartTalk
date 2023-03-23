import React from 'react'

const company = () => {
  return (
    <div className="bg-gray-100">
     <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-white">About Us</h1>
        </div>
    </header>

    <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-6">
                    <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est auctor, molestie nunc in, fermentum libero. Donec commodo risus turpis, vitae sagittis elit maximus id. Duis maximus, odio vel aliquet consequat, lorem risus commodo erat, non ullamcorper orci risus a odio. Proin fringilla tincidunt tempor. </p>

                    <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est auctor, molestie nunc in, fermentum libero. Donec commodo risus turpis, vitae sagittis elit maximus id. Duis maximus, odio vel aliquet consequat, lorem risus commodo erat, non ullamcorper orci risus a odio. Proin fringilla tincidunt tempor. </p>
                </div>

                <div className="w-full lg:w-1/2 px-6">
                    <img className="h-auto w-full object-cover object-center rounded-lg" src="https://images.unsplash.com/photo-1521747116042-5a810fda9664" alt="about-us"/>
                </div>
            </div>
        </div>
    </section>

   
    </div>
  )
}

export default company