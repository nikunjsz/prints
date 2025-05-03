import React from 'react';

const Signinpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E2A44] text-[#F5F1E9] p-6">
      <div className="flex w-full max-w-4xl bg-[#1E2A44]/90 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-gray-700 shadow-black/50">
        {/* Left Section (Image and Text) */}
        <div className="hidden md:flex md:w-1/2 bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center p-8">
            <h1 className="text-2xl font-bold mb-2">Printzz</h1>
            <p className="text-lg">Print you have never seeen hahahaha</p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Log in</h2>
          <p className="text-gray-400 mb-6">Don't have an account? <span className="text-[#D4A017] underline">Sign up</span></p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-transparent border border-[#D3D3D3] rounded-md focus:outline-none focus:border-[#D4A017]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 bg-transparent border border-[#D3D3D3] rounded-md focus:outline-none focus:border-[#D4A017]"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#D4A017]" />
                <span className="text-sm">Remember me</span>
              </div>
              <span className="text-sm text-[#D4A017] underline">Forgot password?</span>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#D4A017] text-[#1E2A44] rounded-md hover:bg-[#B8860B] transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="mb-4">Or continue with</p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 border border-[#D3D3D3] rounded-md hover:bg-[#D3D3D3]/20">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
              </button>
              <button className="p-2 border border-[#D3D3D3] rounded-md hover:bg-[#D3D3D3]/20">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;