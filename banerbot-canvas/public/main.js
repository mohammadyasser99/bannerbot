
    const edit = false
    const canvas = document.getElementById('centrecanvas');
    const ctx = canvas.getContext('2d');
    const text1 = document.getElementById('text1');
    const text1x = document.getElementById('text1x');
    const text1y = document.getElementById('text1y');
    const text2 = document.getElementById('text2');
    const text2x = document.getElementById('text2x');
    const text2y = document.getElementById('text2y');
    const text3 = document.getElementById('text3');
    const text3x = document.getElementById('text3x');
    const text3y = document.getElementById('text3y');
    const rightimg = document.getElementById('rightimg');
    const smallimage = document.getElementById('smallimage');
    let fontcolor = document.getElementById('fontcolor');
    let backgroundcol = document.getElementById('backgroundcol');
    
    
    function addtext() {
        let fontsize = Number(document.getElementById('fontsize').value);
        const img = new Image();
        
        if (!edit) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = backgroundcol.value;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            if(smallimage.files[0]){rightimg.src = URL.createObjectURL(smallimage.files[0]);
                img.src = URL.createObjectURL(smallimage.files[0]);
                img.onload = function () {
                    ctx.drawImage(img, Number(centreimgx.value), Number(centreimgy.value), canvas.width, canvas.height);
                    ctx.font = `${fontsize}px Arial`;
            ctx.fillStyle = fontcolor.value;
            ctx.fillText(text1.value, text1x.value, text1y.value);
            ctx.fillText(text2.value, text2x.value, text2y.value);
            ctx.fillText(text3.value, text3x.value, text3y.value);
                }
            }else{
    
            ctx.font = `${fontsize}px Arial`;
            ctx.fillStyle = fontcolor.value;
            ctx.fillText(text1.value, text1x.value, text1y.value);
            ctx.fillText(text2.value, text2x.value, text2y.value);
            ctx.fillText(text3.value, text3x.value, text3y.value);
        }
    
        } else {
            ctx.fillStyle = backgroundcol.value;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if(smallimage.files[0]){rightimg.src = URL.createObjectURL(smallimage.files[0]);
                img.src = URL.createObjectURL(smallimage.files[0]);
                img.onload = function () {
                    ctx.drawImage(img, Number(centreimgx.value), Number(centreimgy.value), canvas.width, canvas.height);
                    ctx.font = `${fontsize}px Arial`;
            ctx.fillStyle = fontcolor.value;
            ctx.fillText(text1.value, text1x.value, text1y.value, canvas.width, canvas.height);
            ctx.fillText(text2.value, text2x.value, text2y.value);
            ctx.fillText(text3.value, text3x.value, text3y.value);
                }
            }else{
            ctx.font = `${fontsize}px Arial`;
            ctx.fillStyle = fontcolor.value;
            ctx.fillText(text1.value, text1x.value, text1y.value, canvas.width, canvas.height);
            ctx.fillText(text2.value, text2x.value, text2y.value);
            ctx.fillText(text3.value, text3x.value, text3y.value);
    
        }
        }
    }
    
    text1.onchange = addtext;
    text2.onchange = addtext;
    text3.onchange = addtext;
    text1x.onchange = addtext;
    text1y.onchange = addtext;
    text2x.onchange = addtext;
    text2y.onchange = addtext;
    text3x.onchange = addtext;
    text3y.onchange = addtext;
    fontsize.onchange = addtext;
    fontcolor.onchange = addtext;
    
    
    smallimage.onchange = addtext;
    backgroundcol.onchange = addtext;
    centreimgx.onchange = addtext;
    centreimgy.onchange = addtext;
    
    rotatex.onchange = addtext;
    rotatey.onchange = addtext;

    function downloadCanvas(){
        const link = document.createElement('a');
        const tempname = document.getElementById('tempname');
        link.href = canvas.toDataURL();
        link.download = tempname.value + '.png';
        link.click();
        
        }

    
  
















