import { useEffect, useState, ReactNode } from 'react';

interface ScaledContainerProps {
  children: ReactNode;
  designWidth?: number;
}

export function ScaledContainer({ children, designWidth = 1440 }: ScaledContainerProps) {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const windowWidth = window.innerWidth;
      const mobile = windowWidth < 768;
      setIsMobile(mobile);
      
      if (!mobile) {
        const newScale = windowWidth >= designWidth ? 1 : windowWidth / designWidth;
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    
    return () => window.removeEventListener('resize', updateScale);
  }, [designWidth]);

  if (isMobile) {
    return (
      <div className="w-full overflow-x-clip bg-[rgb(230,239,255)]">
        {children}
      </div>
    );
  }

  return (
    <div className="flex justify-center overflow-x-clip">
      <div 
        style={{
          width: `${designWidth}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </div>
    </div>
  );
}