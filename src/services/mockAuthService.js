// Mock Authentication Service
// This simulates backend authentication in a front-end only environment

// Storage key for user data
const USER_STORAGE_KEY = 'frame_guru_user';
const USERS_STORAGE_KEY = 'frame_guru_users';

// Initialize users array if it doesn't exist
const initializeUsers = () => {
  if (!localStorage.getItem(USERS_STORAGE_KEY)) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([
      {
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com',
        password: 'password123' // In a real app, NEVER store plain text passwords
      }
    ]));
  }
};

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthService = {
  // Get current user from localStorage
  getCurrentUser: async () => {
    await delay(500); // Simulate API delay
    const userData = localStorage.getItem(USER_STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  },
  
  // Login user
  login: async (email, password) => {
    await delay(1000); // Simulate API delay
    initializeUsers();
    
    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Create a safe user object (without password) to store in localStorage
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeUser));
    return safeUser;
  },
  
  // Register new user
  register: async (name, email, password) => {
    await delay(1000); // Simulate API delay
    initializeUsers();
    
    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
      throw new Error('Email already in use');
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password // In a real app, this would be hashed
    };
    
    // Add to users array
    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    
    // Create a safe user object (without password) to store in localStorage
    const safeUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };
    
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(safeUser));
    return safeUser;
  },
  
  // Logout user
  logout: async () => {
    await delay(500); // Simulate API delay
    localStorage.removeItem(USER_STORAGE_KEY);
  },
  
  // Update user profile
  updateProfile: async (userId, updates) => {
    await delay(1000); // Simulate API delay
    
    // Get current user
    const currentUser = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
    if (!currentUser || currentUser.id !== userId) {
      throw new Error('Unauthorized');
    }
    
    // Get all users
    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    // Update user
    const updatedUser = {
      ...users[userIndex],
      ...updates
    };
    
    users[userIndex] = updatedUser;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    
    // Update current user
    const updatedCurrentUser = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email
    };
    
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedCurrentUser));
    return updatedCurrentUser;
  }
};
