import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { AppContext } from '../Context/context'

function Portal({ children }) {

    const { closePortal } = useContext(AppContext)

    return createPortal(
        <div
            style={{
                  zIndex: 1000,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  position: 'fixed',
                  inset: 0,
            }}
        >
            <div style={{
                  display: 'inline-block',
                  backgroundColor: '#fff',
                  padding: 54,
            }}>
                {children}
            </div>

            <button style={{
                  margin: '0px 0px 570px 10px',
                  width: 30,
                  height: 30,
                  color: '#fff',
                  backgroundColor: '#ffffff00',
                  border: 0,
                  fontSize: 30,
                  cursor: 'pointer',
            }} onClick={closePortal}>
                ✕
            </button>

        </div>,
        document.getElementById('modal')
    )
}

export default Portal