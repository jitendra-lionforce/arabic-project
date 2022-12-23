import { useEffect, useState, useRef } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { IoMdCamera } from 'react-icons/io'
const CarIssuePopup = (props) => {
    const [show, setShow] = useState(false);
    const [popupshow, setPopupshow] = useState(true)
    const [heading, setHeading] = useState('')
    const [desc, setDesc] = useState('')
    const [issuenum, setIssuenum] = useState(false)

    const closeHandler = (e) => {
        if (heading || desc) {
            setIssuenum(true)
            setShow(false);
            props.onClose(false);
        }
        else {
            setShow(false);
            props.onClose(false);
        }

    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    const [imagePreview, setImagePreview] = useState(null);

    const filePicekerRef = useRef(null);

    function previewFile(e) {
        const reader = new FileReader();

        const selectedFile = e.target.files[0];
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }

        reader.onload = (readerEvent) => {
            if (selectedFile.type.includes("image")) {
                setImagePreview(readerEvent.target.result);
            }
        };
    }

    function clearFiles() {
        setImagePreview(null);
    }

    
    return (
        <>
           { <div
                style={{
                    visibility: show ? "visible" : "hidden",
                    opacity: show ? "1" : "0"
                }}
                className={popupStyles.overlay}>
                <div className={popupStyles.popup}>
                    {
                        popupshow ? <>
                            <div className={popupStyles.content}>
                                <h6 className="text-start">Left Backdoor Handle</h6>
                                <div className="text-start mt-4"><small>Condition</small></div>
                                <div className="mt-1 text-start">
                                    <button onClick={closeHandler} className="btn btn-success">Good</button>
                                    <button onClick={() => setPopupshow(false)} className="btn btn-danger mx-2">Issue</button>
                                </div>
                            </div>
                        </>
                            :
                            <>
                                <div className={popupStyles.content}>
                                    <div className="text-start mt-4"><h6>Issue</h6></div>
                                    <div className="row w-100 m-0">
                                        <div className="col-8">
                                            <div><input value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="Heading" type="text" className="form-control" /></div>
                                            <div><input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Descriptions" type="text" className="form-control mt-2" /></div>
                                        </div>
                                        <div className="col-4 d-flex car-issue-file">
                                            <input
                                                ref={filePicekerRef}
                                                accept="image/*"
                                                onChange={previewFile}
                                                type="file"
                                                hidden
                                            />
                                            {(!imagePreview) && (<button className="btn" onClick={() => filePicekerRef.current.click()}>
                                                <IoMdCamera className="h1" />
                                            </button>)}
                                            {(imagePreview) && (
                                                <button className="btn preview-image-btn" onClick={clearFiles}>
                                                    x
                                                </button>
                                            )}
                                            <div className="preview-image">
                                                {imagePreview != null && <img src={imagePreview} alt="Carissue" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <button className="btn btn-sm btn-danger mx-2">Add New Isuue</button>
                                        <button onClick={closeHandler} className="btn btn-sm btn-dark">Submit</button>
                                    </div>
                                </div>


                            </>
                    }

                </div>

            </div>}
            {issuenum ?
                <div className="Issuenum">
                    <span className="text-danger text-light">1</span>
                </div> :
                ''}
        </>
    );
};

CarIssuePopup.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CarIssuePopup;
