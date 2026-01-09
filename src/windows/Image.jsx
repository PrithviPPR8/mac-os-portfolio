import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const imageSrc = data.imageUrl ?? data.image ?? null;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{data.name}</h2>
      </div>

      <div className='image-file'>
        {imageSrc && (
          <div className='image-wrapper'>
            <img 
                src={imageSrc} 
                alt={data.name} 
                className='p-2'
            />
          </div>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
