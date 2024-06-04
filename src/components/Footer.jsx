import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear(); 

  return (
    <footer>
        <p className=''>
            copyright &copy; {currentYear}
        </p>
    </footer>
  )
}

export default Footer