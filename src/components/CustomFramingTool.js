import React, { useState, useRef } from 'react';
import './CustomFramingTool.css';

const CustomFramingTool = () => {
  // State for uploaded image
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  
  // State for frame options
  const [frameStyle, setFrameStyle] = useState('wood-natural');
  const [matColor, setMatColor] = useState('white');
  const [frameWidth, setFrameWidth] = useState(2);
  const [matWidth, setMatWidth] = useState(3);
  
  // Reference to file input
  const fileInputRef = useRef(null);
  
  // Frame style options
  const frameStyles = [
    { id: 'wood-natural', name: 'Natural Wood', color: '#D2B48C' },
    { id: 'wood-walnut', name: 'Walnut Wood', color: '#5C4033' },
    { id: 'wood-black', name: 'Black Wood', color: '#2C2C2C' },
    { id: 'metal-silver', name: 'Silver Metal', color: '#C0C0C0' },
    { id: 'metal-gold', name: 'Gold Metal', color: '#FFD700' },
    { id: 'composite-white', name: 'White Composite', color: '#FFFFFF' },
  ];
  
  // Mat color options
  const matColors = [
    { id: 'white', name: 'White', color: '#FFFFFF' },
    { id: 'black', name: 'Black', color: '#2C2C2C' },
    { id: 'grey', name: 'Grey', color: '#ADADAD' },
    { id: 'beige', name: 'Beige', color: '#F5F5DC' },
  ];
  
  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  // Handle file input change
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  // Handle uploaded file
  const handleFile = (file) => {
    // Check if file is an image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file');
    }
  };
  
  // Handle button click for file input
  const onButtonClick = () => {
    fileInputRef.current.click();
  };
  
  // Get the selected frame style color
  const getSelectedFrameColor = () => {
    const selected = frameStyles.find(style => style.id === frameStyle);
    return selected ? selected.color : '#D2B48C';
  };
  
  // Get the selected mat color
  const getSelectedMatColor = () => {
    const selected = matColors.find(color => color.id === matColor);
    return selected ? selected.color : '#FFFFFF';
  };
  
  return (
    <div className="framing-tool-container">
      <div className="framing-tool-grid">
        {/* Left Column - Image Upload */}
        <div className="framing-tool-column upload-column">
          <h3>1. Upload Your Image</h3>
          <div 
            className={`upload-area ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            {!image ? (
              <div className="upload-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <p>Drag & drop an image or</p>
                <button className="btn btn-secondary" onClick={onButtonClick}>Browse Files</button>
                <input 
                  ref={fileInputRef}
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>
            ) : (
              <div className="uploaded-image-container">
                <img src={image} alt="Uploaded artwork" className="uploaded-image" />
                <button className="btn btn-secondary change-image-btn" onClick={onButtonClick}>
                  Change Image
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Center Column - Frame Options */}
        <div className="framing-tool-column options-column">
          <h3>2. Choose Frame Options</h3>
          
          <div className="frame-option-group">
            <h4>Frame Style</h4>
            <div className="frame-options">
              {frameStyles.map((style) => (
                <div 
                  key={style.id}
                  className={`frame-option ${frameStyle === style.id ? 'selected' : ''}`}
                  onClick={() => setFrameStyle(style.id)}
                >
                  <div className="frame-color-preview" style={{ backgroundColor: style.color }}></div>
                  <span>{style.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="frame-option-group">
            <h4>Mat Color</h4>
            <div className="mat-options">
              {matColors.map((color) => (
                <div 
                  key={color.id}
                  className={`mat-option ${matColor === color.id ? 'selected' : ''}`}
                  onClick={() => setMatColor(color.id)}
                >
                  <div className="mat-color-preview" style={{ backgroundColor: color.color }}></div>
                  <span>{color.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="frame-option-group dimensions">
            <h4>Dimensions</h4>
            <div className="dimension-inputs">
              <div className="input-group">
                <label htmlFor="frame-width">Frame Width (inches)</label>
                <input 
                  type="number" 
                  id="frame-width" 
                  min="0.5" 
                  max="4" 
                  step="0.25" 
                  value={frameWidth} 
                  onChange={(e) => setFrameWidth(parseFloat(e.target.value))} 
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label htmlFor="mat-width">Mat Width (inches)</label>
                <input 
                  type="number" 
                  id="mat-width" 
                  min="0" 
                  max="6" 
                  step="0.25" 
                  value={matWidth} 
                  onChange={(e) => setMatWidth(parseFloat(e.target.value))} 
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Preview */}
        <div className="framing-tool-column preview-column">
          <h3>3. Preview Your Frame</h3>
          <div className="frame-preview">
            {image ? (
              <div 
                className="framed-image" 
                style={{ 
                  borderWidth: `${frameWidth}rem`,
                  borderColor: getSelectedFrameColor(),
                  padding: `${matWidth}rem`,
                  backgroundColor: getSelectedMatColor(),
                }}
              >
                <img src={image} alt="Your framed artwork" />
              </div>
            ) : (
              <div className="preview-placeholder">
                <p>Upload an image to see preview</p>
              </div>
            )}
          </div>
          <button className="btn btn-primary add-to-cart-btn" disabled={!image}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomFramingTool;
