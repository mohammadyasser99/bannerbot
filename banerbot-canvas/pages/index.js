import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react';
import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight,faEllipsis,faPlus,faArrowDown ,faQuestion} from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

const downloadCanvas = () => {
    const link = document.createElement('a');
    const tempname = document.getElementById('tempname');
link.href = canvas.toDataURL();
link.download = tempname.value + '.png';
link.click();
}

  return (
    <>

      <Head>
        <title>bannerbot</title>
        <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </Head>
      

      <div className='row'>

        <div className="col leftcolumcolor">

          {/* first row */}
          <div className="leftelemnt">
            <button type="button" className="btn btn-primary savetemplate" onClick={downloadCanvas}>Save
              Template</button>
          </div>

          {/* second row */}
          <div className="leftelemnt">
            <h5>Name</h5>
            <input type="text" name="" id='tempname' defaultValue='image' className="form-control widthful" />
          </div>

          {/* third row */}
          <div className="leftelemnt">

<div className="button-container"> 
    <button className="redo"><FontAwesomeIcon icon={faRotateRight} className='fa-undo'/> Undo</button>
    <button className="redo">Redo<FontAwesomeIcon icon={faRotateRight} className='fa-redo' flip="horizontal" /></button>
</div>

</div>

          {/* fourth row */}
          <div className="leftelemnt">
                    New Layer <FontAwesomeIcon icon={faPlus} />

                </div>

          {/* fifth row */}
          <div className="leftelemnt">
                    Layers


                    <div className="input-container">
                        <input type="text" placeholder="text_1" id="text1"/>
                        <FontAwesomeIcon icon={faEllipsis} /><br/>
                    </div>
                    <div className='widthful'>
                        <input type="number" placeholder="X-coordinate" className="width2" id="text1x" defaultValue="100" />
                        <input type="number" placeholder="Y-coordinate" className="width1" id="text1y" defaultValue="100" />
                    </div>



                    <div className="input-container">
                        <input type="text" placeholder="text_2" id="text2" />
                        <FontAwesomeIcon icon={faEllipsis} />


                    </div>
                    <div className="widthful">
                        <input type="number" placeholder="X-coordinate" className="width2" id="text2x" defaultValue="250" />
                        <input type="number" placeholder="Y-coordinate" className="width1" id="text2y" defaultValue="100" />
                    </div>

                    <div className="input-container">
                        <input type="text" placeholder="text_3" id="text3" />
                        <FontAwesomeIcon icon={faEllipsis} />


                    </div>
                    <div className="widthful">
                        <input type="number" placeholder="X-coordinate" className="width2" id="text3x" defaultValue="350" />
                        <input type="number" placeholder="Y-coordinate" className="width1" id="text3y" defaultValue="100" />
                    </div>
{/*   padding 10px*/}
                    <div >
                    
                        <input type="hidden" className="btn btn-primary" id="addtext" />
                        font-size:
                        <input type="number" placeholder="font-size" className="widthful" id="fontsize" defaultValue="30" />
                        text-color:<input type="color" placeholder="color" className="width2" id="fontcolor" />
                    </div>

                    <div>
                        background-color: <input type="color" name="" id="backgroundcol" placeholder="background-color"
                            defaultValue="#ffffff" />
                    </div>

                </div>

                <div className="leftelemnt">
  {/* sixth row */}

<label className="switch">
    <input type="checkbox" />
    <span className="slider round"></span>
</label> Disable Guides


</div>


        </div>


{/*                             centre canvas starts here */              }
<div className='col-7'>
<canvas width="860px" height="500px" id="centrecanvas"></canvas>
</div>

{/*                             right column starts here */              }
<div className="col rightcolom">


<div className="rightelement">

  
    <div className="input-group mb-2 mr-sm-2 firstright">
        <div className="input-group-prepend">
            <div className="input-group-text">Name</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2"
            placeholder="image_container" />
    </div>


    <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
            <div className="input-group-text">W</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="1228" defaultValue="disabled"/>

        <div className="input-group-prepend">
            <div className="input-group-text">H</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="776" defaultValue="disabled"/>



    </div>


    <div className="input-group mb-2 mr-sm-2" >
        <div className="input-group-prepend">
            <div className="input-group-text">X</div>
        </div>
        <input type="number" className="form-control rotateheight" id="centreimgx" placeholder="-1" defaultValue="0"
             />

        <div className="input-group-prepend">
            <div className="input-group-text">Y</div>
        </div>
        <input type="number" className="form-control rotateheight" id="centreimgy" placeholder="-46" defaultValue="100"
            />



    </div>

 
    <div className="input-group mb-2 mr-sm-2 firstright">
        <div className="input-group-prepend">
            <div className="input-group-text">Angle</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="0" defaultValue="disabled"/>
    </div>

   
    <div className="input-group mb-2 mr-sm-2 firstright">
        <div className="input-group-prepend">
            <div className="input-group-text">Opacity</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="1" defaultValue="disabled" />
    </div>

  
    <div className="input-group mb-2 mr-sm-2 firstright">
        <div className="input-group-prepend">
            <div className="input-group-text">Rotate X</div>
        </div>
        <input type="number" className="form-control rotateheight" id="rotatex" placeholder="disabled" defaultValue="disabled" />
    </div>

  
    <div className="input-group mb-2 mr-sm-2 firstright">
        <div className="input-group-prepend">
            <div className="input-group-text">Rotate Y</div>
        </div>
        <input type="number" className="form-control rotateheight" id="rotatey" placeholder="disabled" defaultValue="disabled" />
    </div>


    <div className="input-group mb-2 mr-sm-2 firstright">
        <div className="input-group-prepend">
            <div className="input-group-text">Rotate Z</div>
        </div>
        <input type="text" className="form-control rotateheight"  placeholder="disabled" defaultValue="disabled" />
    </div>

</div>



<div className="rightelement">

    <img src="" className="rightsmlimg" id="rightimg" />

    <input type="file" className="selectimg" id="smallimage" />
    <div className="facedetection">


        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label> Face Detection
        <br />

        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label> Smart Crop




    </div>

  
    <div className="input-group mb-2 mr-sm-2 input-container rightdown">
        <div className="input-group-prepend">
            <div className="input-group-text">Type</div>
        </div>
        
        <input type="text" placeholder="0" defaultValue="disabled"/>
        <FontAwesomeIcon icon={faArrowDown} size="sm" id='downarrow' className='downarrow' />
    </div>

    <div className="input-group mb-2 mr-sm-2 input-container rightdown">
        <div className="input-group-prepend">
            <div className="input-group-text">Anchor X</div>
        </div>
       
        <input type="text" placeholder="0" defaultValue="disabled"/>
        <FontAwesomeIcon icon={faArrowDown} size="sm" id='downarrow' className='downarrow' />
    </div>

    <div className="input-group mb-2 mr-sm-2 input-container rightdown">
        <div className="input-group-prepend">
            <div className="input-group-text">Anchor Y</div>
        </div>
     
        <input type="text" placeholder="0" defaultValue="disabled"/>
        <FontAwesomeIcon icon={faArrowDown} size="sm" id='downarrow' className='downarrow'/>
    </div>

    <div className="input-group mb-2 mr-sm-2 input-container rightdown">
        <div className="input-group-prepend">
            <div className="input-group-text">Effect</div>
        </div>
       
        <input type="text" placeholder="none" defaultValue="disabled"/>
        <FontAwesomeIcon icon={faArrowDown} size="sm" id='downarrow' className='downarrow'/>
    </div>

</div>


<div className="rightelement">

    <div className="input-group mb-2 mr-sm-2 input-container rightdown">
        <div className="input-group-prepend">
            <div className="input-group-text">shadow</div>
        </div>
       
        <input type="text" placeholder="0px 2px 4px #000" />
        <FontAwesomeIcon icon={faQuestion}  className='questionmark'/>
    </div>

    <div className="input-group mb-2 mr-sm-2" >
        <div className="input-group-prepend">
            <div className="input-group-text">Border color</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="" />
    </div>

</div>










</div>


  </div>
 
      
<Script src="/main.js" strategy="beforeInteractive" />

    </>
  )
}
