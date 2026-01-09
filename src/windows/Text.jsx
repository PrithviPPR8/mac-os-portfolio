import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const imageSrc = data.imageUrl ?? data.image ?? null;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2>{data.name}</h2>
      </div>

      <div className='text-file'>
        {imageSrc && (
          <div className='text-file-image'>
            <img src={imageSrc} alt={data.name} />
          </div>
        )}

        {data.subtitle && <p className='subtitle'>{data.subtitle}</p>}

        <div className='content space-y-4'>
          {data.description && data.description.map((para, i) => (
            <p key={i} className='px-2 py-1'>{para}</p>
          ))}
        </div>
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
