import React, { useState, useEffect } from 'react';
import './GalleryWallConfigurator.css';

const GalleryWallConfigurator = () => {
  // Sample placeholder images
  const placeholderImages = [
    '/api/placeholder/400/600',
    '/api/placeholder/600/400',
    '/api/placeholder/500/500',
    '/api/placeholder/400/300',
    '/api/placeholder/300/400',
    '/api/placeholder/450/600',
  ];
  
  // State for layout type
  const [layoutType, setLayoutType] = useState('grid');
  
  // State for gallery images
  const [images, setImages] = useState(placeholderImages.map((src, index) => ({
    id: index + 1,
    src,
    alt: `Gallery image ${index + 1}`,
    order: index,
    width: src.split('/').slice(-2)[0],
    height: src.split('/').slice(-1)[0],
  })));
  
  // State for drag and drop
  const [draggedItem, setDraggedItem] = useState(null);
  
  // Effect to recalculate layout when layout type changes
  useEffect(() => {
    // Rearrange images based on layout type
    // For demo purposes, this just reorders the images slightly differently
    const reorderImages = [...images];
    
    if (layoutType === 'brick') {
      // Brick layout - alternate wide/narrow images
      reorderImages.sort((a, b) => {
        const aRatio = a.width / a.height;
        const bRatio = b.width / b.height;
        return bRatio - aRatio; // Sort by aspect ratio
      });
    } else if (layoutType === 'masonry') {
      // Masonry - sort by height
      reorderImages.sort((a, b) => b.height - a.height);
    } else {
      // Grid - sort by original order
      reorderImages.sort((a, b) => a.order - b.order);
    }
    
    setImages(reorderImages.map((img, idx) => ({ ...img, order: idx })));
  }, [layoutType]);
  
  // Handle drag start
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };
  
  // Handle drag over
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null) return;
    
    if (draggedItem !== index) {
      const newImages = [...images];
      const draggedItemContent = newImages[draggedItem];
      newImages.splice(draggedItem, 1);
      newImages.splice(index, 0, draggedItemContent);
      
      // Update the order
      newImages.forEach((img, idx) => {
        img.order = idx;
      });
      
      setDraggedItem(index);
      setImages(newImages);
    }
  };
  
  // Handle drag end
  const handleDragEnd = () => {
    setDraggedItem(null);
  };
  
  return (
    <div className="gallery-wall-container">
      <div className="gallery-controls">
        <div className="layout-selector">
          <h3>Choose Layout</h3>
          <div className="layout-buttons">
            <button 
              className={`btn ${layoutType === 'grid' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setLayoutType('grid')}
            >
              Grid
            </button>
            <button 
              className={`btn ${layoutType === 'brick' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setLayoutType('brick')}
            >
              Brick
            </button>
            <button 
              className={`btn ${layoutType === 'masonry' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setLayoutType('masonry')}
            >
              Masonry
            </button>
          </div>
        </div>
        
        <div className="gallery-instructions">
          <h4>Customize Your Gallery Wall</h4>
          <p>Drag and drop images to rearrange. Choose a layout style that complements your space.</p>
        </div>
      </div>
      
      <div className={`gallery-preview ${layoutType}-layout`}>
        {images.map((image, index) => (
          <div 
            key={image.id}
            className="gallery-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
          >
            <div className="gallery-frame">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="gallery-actions">
        <button className="btn btn-tertiary">Save Gallery Wall</button>
      </div>
    </div>
  );
};

export default GalleryWallConfigurator;
