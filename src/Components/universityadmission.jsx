import React from 'react'

const universityadmission = () => {
  return (
    <div>
       <div class="max-w-2xl mx-auto py-32">
    <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="name" class="block font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"  />
      </div>
      <div>
        <label for="email" class="block font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
      </div>
      <div>
        <label for="message" class="block font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows="5" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></textarea>
      </div>
      <div>
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default universityadmission