import React from 'react'
import Navigation from './Navigation'

export default function Homepage() {
  return (
    <>
        <Navigation/>
        <div className="container my-3">
            <div className='home-page-text'>
                <h1>Create a professional CV</h1>
            </div>
            <div className='home-page-text my-2'>
                <h3>Fill in the blanks, choose a template and download</h3>
            </div>
        </div>

        <div className="container my-4">
            <div className='row my-2'>
                <div className='col-md-4'>
                    <img src="Resume1.png" alt="Resume1" className='img-fluid'/>
                </div>
                <div className='col-md-4'>
                    <img src="Resume2.png" alt="Resume1" className='img-fluid'/>
                </div>
                <div className='col-md-4'>
                    <img src="Resume3.png" alt="Resume1" className='img-fluid'/>
                </div>
            </div>

        </div>
    
    
    </>
  )
}
