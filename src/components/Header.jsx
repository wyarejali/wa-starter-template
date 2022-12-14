import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='flex-between'>
          <div className='logo-area'>
            <h2 className='logo'>Starter.</h2>
          </div>
          <div className='menu'>
            <ul>
              <li>
                <a className='btn' href='/'>
                  Go to Root
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
