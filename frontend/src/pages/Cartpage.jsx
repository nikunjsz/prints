import React from 'react';

const ProductCard = ({ image, title, category, price, mrp, status }) => {
  return (
    <div className="max-w-xs flex flex-col">
      <div className="w-full h-64 rounded-lg overflow-hidden shadow-sm mb-2 bg-cream">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-lg text-navy-blue">{title}</h3>
        <p className="text-taupe-700">{category}</p>
        <div className="flex mt-1 justify-between">
          <div>
            <span className="font-medium">₹ {price}</span>
            {mrp && <span className="text-taupe-600 ml-2 text-sm">MRP: ₹ {mrp}</span>}
          </div>
          {status && (
            <div className={`${status === 'Added' ? 'bg-gold-100 text-gold-800' : 'bg-taupe-100 text-taupe-800'} px-3 py-1 rounded-full text-sm`}>
              {status === 'Added' && <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mr-1"></span>}
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="bg-cream min-h-screen">
      <style jsx global>{`
        :root {
          --color-cream: #fcf8e8;
          --color-gold: #e0ca76;
          --color-gold-light: #f0e8b8;
          --color-gold-dark: #c6b05c;
          --color-taupe: #c9c3b6;
          --color-taupe-light: #e5e1d8;
          --color-taupe-dark: #a19b8d;
          --color-navy-blue: #003057;
        }
        .bg-cream { background-color: var(--color-cream); }
        .bg-gold { background-color: var(--color-gold); }
        .bg-gold-light { background-color: var(--color-gold-light); }
        .bg-gold-dark { background-color: var(--color-gold-dark); }
        .bg-taupe { background-color: var(--color-taupe); }
        .bg-taupe-light { background-color: var(--color-taupe-light); }
        .bg-taupe-dark { background-color: var(--color-taupe-dark); }
        
        .text-gold { color: var(--color-gold); }
        .text-gold-dark { color: var(--color-gold-dark); }
        .text-taupe { color: var(--color-taupe); }
        .text-taupe-700 { color: #6d6a61; }
        .text-taupe-600 { color: #8a877e; }
        .text-navy-blue { color: var(--color-navy-blue); }
        
        .border-gold { border-color: var(--color-gold); }
        .border-taupe { border-color: var(--color-taupe); }
        
        .bg-gold-100 { background-color: #f8f4e0; }
        .text-gold-800 { color: #7a6d2e; }
        .bg-taupe-100 { background-color: #f0efe9; }
        .text-taupe-800 { color: #5d5b54; }
      `}</style>
    
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Bag */}
          <div>
            <h1 className="text-3xl font-normal mb-10 text-navy-blue">Bag</h1>
            
            <div className="border-t border-taupe py-6">
              <div className="flex gap-4">
                <div className="w-32 h-32 bg-cream rounded">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Nike Icon Classic Sandals"
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="font-medium text-navy-blue">Printzie</h2>
                  <p className="text-taupe-700">Italian</p>
                  <p className="text-taupe-700">Sand Drift/Mink Brown/Hemp</p>
                  
                  <div className="flex items-center mt-4 gap-4">
                    <button className="p-2 rounded-full hover:bg-taupe-light" onClick={() => {}} aria-label="Remove item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    
                    <span className="px-3 py-1 text-taupe-700">1</span>
                    
                    <button className="p-2 rounded-full hover:bg-taupe-light" aria-label="Add to favorites">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-medium text-navy-blue">₹ 4,695.00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Summary */}
          <div>
            <h1 className="text-3xl font-normal mb-10 text-navy-blue">Summary</h1>
            
            <div className="bg-taupe-light rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-taupe-700">Subtotal</span>
                <span className="font-medium text-navy-blue">₹ 4,695.00</span>
              </div>
              
              <div className="border-t border-taupe my-4"></div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="font-medium text-navy-blue">Total</span>
                <span className="font-medium text-navy-blue">₹ 4,695.00</span>
              </div>
              
              <button className="w-full bg-gold text-taupe-800 py-4 rounded-full font-medium hover:bg-gold-dark transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
        
        {/* Favourites */}
        <div className="mt-24">
        <h1 className="text-3xl font-normal mb-10 text-navy-blue">Favourites</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4">
            <div className="w-32 h-32 bg-cream rounded">
                <img 
                src="/api/placeholder/128/128" 
                alt="Nike Icon Classic" 
                className="w-full h-full object-contain" 
                />
            </div>
            
            <div className="flex-1">
                <h2 className="font-medium text-navy-blue">Nike Icon Classic</h2>
                <p className="text-taupe-700">Women's Sandals</p>
                <p className="text-taupe-700">Select Size</p>
                
                <button className="mt-2 px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-gold-500 rounded-full"></span>
                Added
                </button>
            </div>
            
            <div className="text-right">
                <p className="font-medium text-navy-blue">MRP: ₹ 4,695.00</p>
            </div>
            </div>
            
            <div className="flex gap-4">
            <div className="w-32 h-32 bg-cream rounded">
                <img 
                src="/api/placeholder/128/128" 
                alt="Nike Air Force 1 '07 LV8" 
                className="w-full h-full object-contain" 
                />
            </div>
            
            <div className="flex-1">
                <h2 className="font-medium text-navy-blue">Nike Air Force 1 '07 LV8</h2>
                <p className="text-taupe-700">Men's Shoes</p>
                
                <button className="mt-2 px-4 py-2 bg-taupe-100 text-taupe-800 rounded-full text-sm whitespace-nowrap">
                Sold Out
                </button>
            </div>
            
            <div className="text-right">
                <p className="font-medium text-navy-blue">₹ 7,557.00</p>
                <p className="text-taupe-600 text-sm">MRP: ₹ 10,795.00</p>
            </div>
            </div>
        </div>
        
        <button className="mt-8 text-gold-dark underline hover:no-underline">
            View more Favourites
        </button>
        </div>
        
        {/* You Might Also Like */}
        <div className="mt-24">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-normal text-navy-blue">You Might Also Like</h1>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-taupe hover:bg-taupe-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-taupe hover:bg-taupe-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard 
              image="/api/placeholder/320/320" 
              title="Nike V2K Run" 
              category="Women's Shoes" 
              price="10,257.00"
              mrp="10,795.00"
            />
            
            <ProductCard 
              image="/api/placeholder/320/320" 
              title="Jordan" 
              category="Women's Shorts" 
              price="4,647.00"
              mrp="4,995.00"
            />
            
            <ProductCard 
              image="/api/placeholder/320/320" 
              title="Nike Air More Uptempo" 
              category="Men's Slides" 
              price="8,067.00"
              mrp="8,495.00"
            />
          </div>
        </div>
        
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default CartPage;