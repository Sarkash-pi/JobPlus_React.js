import React from 'react'
import Controls  from './controls/Controls'

export default function Hero(props) {
  return (
    <>
      <Controls.FormGroupCustom>
        <Controls.ButtonCustom text='Search'/>
      </Controls.FormGroupCustom>
    </>
  )
}
