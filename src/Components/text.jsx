// import PropTypes from 'prop-types';
import { usePDF } from 'react-to-pdf';
import React, { useState } from 'react';






function Texts(Props) {
    const { toPDF, targetRef } = usePDF({filename: 'Texttransform.pdf'});
    const [text, settext] = useState("");
    
    function TransferUp() {
        let newText = text.toUpperCase();
        settext(newText);
        Props.Alart("Text Converted into Uppercase", "success")

    }
    

    function TransferLo() {
        let newText = text.toLowerCase();
        settext(newText);
        Props.Alart("Text Converted into Lowercase", "success")

    }

    function copyAll() {
        let selectall = document.getElementById("textall");
        selectall.select();
        navigator.clipboard.writeText(selectall.value);
        Props.Alart("Text Copied Successfully", "success")

    }

    function spaceRemove() {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        Props.Alart("All Extra Spaces are Removed", "success")

    }

    function ClearTxt() {
        let newText = "";
        settext(newText);
        Props.Alart("Clear All Texts", "danger")

    }


    // textarea change function
    function Changing() {
        settext(event.target.value)
    }

    return (

        <>
            <div className="container mt-5">
                <div className='d-flex justify-content-center mb-5'>
                    <div className='w-75'>
                        <div className=''>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold fs-1">
                                Text
                            </label>
                            <textarea className={`form-control fs-5`} style={{ backgroundColor: (Props.Mode === 'dark' ? 'grey' : 'white'), color: Props.Mode == 'dark' ? 'white' : 'black' , cursor:'cell'}} id="textall" rows={4} value={text} onChange={Changing} ref={targetRef}/>
                            <div className='my-3'>
                                <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={TransferUp}>Upper Case</button>
                                <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={TransferLo}>Lower Case</button>
                                <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={copyAll}>Copy Text</button>
                                <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={spaceRemove}>Remove Extra Spaces</button>
                                <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={ClearTxt}>Clear</button>
                                <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={() => toPDF()}>Download in PDF</button>
                            </div>
                        </div>
                        <div className='container'>
                            <h1>Summery</h1>
                            {/* <div>{text.split(" ").length - 1} words, {text.length} characters</div> */}
                            <div className='my-2'>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words, {text.length} characters</div>
                            <div>{text.split(" ").filter((Element)=>{return Element.length!==0}).length * 0.008} Reading Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


// set proptypes of props
Texts.propTypes = {


}

// set default value of props
Texts.defaultProps = {

}

export default Texts;