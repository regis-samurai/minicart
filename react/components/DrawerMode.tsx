import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { Drawer, BackdropMode } from 'vtex.store-drawer'
import { MaybeResponsiveValue } from 'vtex.responsive-values'
import { PixelData } from 'vtex.pixel-manager/react/PixelContext'

import MinicartIconButton from './MinicartIconButton'

const DRAWER_CLOSE_ICON_HEIGHT = 58
const CSS_HANDLES = ['minicartSideBarContentWrapper']

interface Props {
  Icon: React.ComponentType
  maxDrawerWidth: number | string
  drawerSlideDirection: SlideDirectionType
  quantityDisplay: QuantityDisplayType
  itemCountMode: MinicartTotalItemsType
  backdropMode?: MaybeResponsiveValue<BackdropMode>
  customPixelEventId?: string
  customPixelEventName?: PixelData['event']
}

const DrawerMode: FC<Props> = ({
  Icon,
  children,
  maxDrawerWidth,
  quantityDisplay,
  itemCountMode,
  drawerSlideDirection,
  backdropMode = 'visible',
  customPixelEventId,
  customPixelEventName,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <Drawer
      maxWidth={maxDrawerWidth}
      backdropMode={backdropMode}
      slideDirection={drawerSlideDirection}
      customPixelEventId={customPixelEventId}
      customPixelEventName={customPixelEventName}
      customIcon={
        <MinicartIconButton
          Icon={Icon}
          itemCountMode={itemCountMode}
          quantityDisplay={quantityDisplay}
        />
      }
    >
      <div
        className={`${handles.minicartSideBarContentWrapper} flex flex-column w-100 h-100`}
        style={{
          height: window.innerHeight - DRAWER_CLOSE_ICON_HEIGHT,
        }}
      >
        {children}
      </div>
    </Drawer>
  )
}

export default DrawerMode
