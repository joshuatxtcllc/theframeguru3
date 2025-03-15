// Mock API Service
// This simulates backend API calls in a front-end only environment

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Sample frame styles data
const frameStyles = [
  { id: 'wood-natural', name: 'Natural Wood', color: '#D2B48C', price: 69.99, material: 'wood' },
  { id: 'wood-walnut', name: 'Walnut Wood', color: '#5C4033', price: 79.99, material: 'wood' },
  { id: 'wood-black', name: 'Black Wood', color: '#2C2C2C', price: 69.99, material: 'wood' },
  { id: 'metal-silver', name: 'Silver Metal', color: '#C0C0C0', price: 89.99, material: 'metal' },
  { id: 'metal-gold', name: 'Gold Metal', color: '#FFD700', price: 99.99, material: 'metal' },
  { id: 'composite-white', name: 'White Composite', color: '#FFFFFF', price: 59.99, material: 'composite' },
];

// Sample mat color options
const matColors = [
  { id: 'white', name: 'White', color: '#FFFFFF', price: 19.99 },
  { id: 'black', name: 'Black', color: '#2C2C2C', price: 19.99 },
  { id: 'grey', name: 'Grey', color: '#ADADAD', price: 19.99 },
  { id: 'beige', name: 'Beige', color: '#F5F5DC', price: 19.99 },
];

// Sample gallery wall layouts
const galleryLayouts = [
  { id: 'grid', name: 'Grid', description: 'A clean, symmetrical arrangement' },
  { id: 'brick', name: 'Brick', description: 'Offset rows for a dynamic look' },
  { id: 'masonry', name: 'Masonry', description: 'Varying heights for a Pinterest-style layout' },
];

// Sample orders data (for authenticated users)
let orders = [];

// Sample product data
const products = [
  {
    id: 'custom-frame',
    name: 'Custom Frame',
    type: 'frame',
    description: 'Personalized framing for your artwork or photo',
    basePrice: 49.99,
    options: {
      frameStyles,
      matColors,
    }
  },
  {
    id: 'gallery-wall-set',
    name: 'Gallery Wall Set',
    type: 'set',
    description: 'A curated set of frames for your gallery wall',
    basePrice: 249.99,
    options: {
      layouts: galleryLayouts,
      frameCount: [3, 5, 7, 9],
      frameStyles,
    }
  },
];

export const mockApiService = {
  // Get frame styles
  getFrameStyles: async () => {
    await delay(300);
    return frameStyles;
  },
  
  // Get mat colors
  getMatColors: async () => {
    await delay(300);
    return matColors;
  },
  
  // Get gallery layouts
  getGalleryLayouts: async () => {
    await delay(300);
    return galleryLayouts;
  },
  
  // Get products
  getProducts: async () => {
    await delay(500);
    return products;
  },
  
  // Get product by ID
  getProduct: async (productId) => {
    await delay(300);
    const product = products.find(p => p.id === productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  },
  
  // Calculate custom frame price
  calculateFramePrice: async (options) => {
    await delay(500);
    
    const { frameStyleId, matColorId, width, height, quantity = 1 } = options;
    
    const basePrice = 49.99;
    const frameStyle = frameStyles.find(f => f.id === frameStyleId);
    const matColor = matColors.find(m => m.id === matColorId);
    
    if (!frameStyle || !matColor) {
      throw new Error('Invalid frame style or mat color');
    }
    
    // Calculate price based on size and options
    const size = width * height;
    const sizeMultiplier = Math.sqrt(size) / 10; // Adjust price based on size
    
    const totalPrice = (
      basePrice + 
      frameStyle.price + 
      matColor.price + 
      (sizeMultiplier * 20)
    ) * quantity;
    
    return {
      basePrice,
      framePrice: frameStyle.price,
      matPrice: matColor.price,
      sizeAdjustment: sizeMultiplier * 20,
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      pricePerUnit: parseFloat((totalPrice / quantity).toFixed(2)),
    };
  },
  
  // Submit contact form
  submitContactForm: async (formData) => {
    await delay(1000);
    
    // In a real app, this would send data to a server
    console.log('Contact form submitted:', formData);
    
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    };
  },
  
  // Create order (requires authentication)
  createOrder: async (userId, orderData) => {
    await delay(1500);
    
    if (!userId) {
      throw new Error('Authentication required');
    }
    
    const newOrder = {
      id: Date.now().toString(),
      userId,
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    orders.push(newOrder);
    
    return newOrder;
  },
  
  // Get user orders (requires authentication)
  getUserOrders: async (userId) => {
    await delay(800);
    
    if (!userId) {
      throw new Error('Authentication required');
    }
    
    return orders.filter(order => order.userId === userId);
  },
  
  // Get order by ID (requires authentication)
  getOrder: async (userId, orderId) => {
    await delay(500);
    
    if (!userId) {
      throw new Error('Authentication required');
    }
    
    const order = orders.find(order => order.id === orderId && order.userId === userId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    return order;
  }
};
