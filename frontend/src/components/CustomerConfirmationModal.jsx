import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './BottomModal.css'
import Form from 'react-bootstrap/Form';
import { RiEdit2Fill } from 'react-icons/ri';
import Signature from '../assets/images/digital-signature.png'
import gallerysign from '../assets/images/Ellipse24.png'
import Dummy from '../assets/images/dummy.png'



function CustomerConfirmationModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div onClick={handleShow} className='text-end confirmation'><RiEdit2Fill /></div>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className='row'>

                        <div className="col-md-9">
                            <b>Customer Descriptions</b>
                        </div>

                        <div className="col-md-2 text-center">
                            <b>RTS Code </b>
                        </div>
                        <div className="col-md-1">
                            <span className='h3'>

                            </span>
                            <span className='h3 mx-3'>

                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='row p-2' style={{ background: 'rgba(214, 214, 214, 0.3)' }} >
                        <div className="col-md-9">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>

                        <div className="col-md-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-1 text-center">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>

                        </div>
                    </div>

                    <div className='row mt-2 p-2' style={{ background: 'rgba(214, 214, 214, 0.3)' }}>
                        <div className="col-md-9">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>

                        <div className="col-md-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-1 text-center">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>

                        </div>
                    </div>
                    <hr />
                     
                     <div className="row mb-3">
                        <div className="col-md-12">
                            <b>Advisor Observations</b>
                        </div>
                     </div>
                    <div className='row border-bottom' >
                        <div className="col-md-2">
                            <span>Heading</span>
                        </div>
                        <div className="col-md-6">
                            <span>Descriptions</span>
                        </div>
                        <div className="col-md-1 text-center">
                            <span>Snap</span>
                        </div>
                        <div className="col-md-2 text-center">
                            <span>RTS Code </span>
                        </div>
                        <div className="col-md-1">
                            <span className='h3'>

                            </span>
                            <span className='h3 mx-3'>

                            </span>
                        </div>
                    </div>

                    <div className='row p-2' style={{ background: 'rgba(214, 214, 214, 0.3)' }}>
                        <div className="col-md-2">
                            <input value='Left Door' type="text" className='form-control border-0' />
                        </div>
                        <div className="col-md-6">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>
                        <div className="col-md-1 text-center">
                            <img src={gallerysign} alt="gallery" className='img-fluid' /> +5
                            {/* <FaCamera className='h3' /> */}
                        </div>
                        <div className="col-md-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-1 text-center">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>

                        </div>
                    </div>

                    <div className='row mt-2 p-2' style={{ background: 'rgba(214, 214, 214, 0.3)' }}>
                        <div className="col-md-2">
                            <input value='Left Door' type="text" className='form-control border-0' />
                        </div>
                        <div className="col-md-6">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>
                        <div className="col-md-1 text-center">
                            <img src={gallerysign} alt="gallery" className='img-fluid' /> +5
                            {/* <FaCamera className='h3' /> */}
                        </div>
                        <div className="col-md-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-1 text-center">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>

                        </div>
                    </div>

                    <div className='row mt-2 p-2' style={{ background: 'rgba(214, 214, 214, 0.3)' }}>
                        <div className="col-md-2">
                            <input value='Left Door' type="text" className='form-control border-0' />
                        </div>
                        <div className="col-md-6">
                            <input value='We will see both customer feedback and RTS code which the advisor will select based on the feedback' type="text" className='w-100 form-control border-0' />
                        </div>
                        <div className="col-md-1 text-center">
                            {/* <FaCamera className='h3' /> */}
                            <img src={gallerysign} alt="gallery" className='img-fluid' /> +5
                        </div>
                        <div className="col-md-2">
                            <Form.Select className='border-0'>
                                <option>Select</option>
                                <option value="1">RTS421</option>
                                <option value="2">RTS241</option>
                                <option value="3">RTS456</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-1 text-center">
                            <span className='h3'>
                                <RiEdit2Fill />
                            </span>

                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <b>Terms and Conditions</b> <br />
                            <small>I the undersigned authorise to carry out the above repairs including
                                necessary spare parts in a manner as you see fit. Your employees are
                                hereby granted permission to operate the vehicle on the road for the
                                purpose of testing it. I accept that you won’t be held responsible
                                for loss of my belongings left in the vehicle and any loss caused
                                beyond your control. Further I hereby commit that I will collect
                                the vehicle from the garage within one week, after the vehicle
                                is ready for collection, if not, I agree to pay between 2.R.O
                                to 5 R.O per day towards the parking charges with no responsibility
                                on you towards the vehicle. I am fully aware that the company
                                reserves the right to dispose the vehicle and adjust the proceeds
                                against dues pending to be settled by me if the vehicle is not
                                collected within the stipulated period and agree to all terms
                                printed on the rear of the document.
                            </small>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <b>الأحكام والشروط</b> <br />
                            <span>أنا الموقع أدناه أصرح بإجراء
                                الإصلاحات المذكورة أعلاه بما في ذلك قطع الغيار اللازمة بالطريقة
                                التي تراها مناسبة. يُمنح موظفوك بموجب هذا الإذن بتشغيل السيارة
                                على الطريق بغرض اختبارها. أوافق على عدم تحميلك المسؤولية عن
                                فقدان متعلقاتي المتروكة في السيارة وأي خسارة خارجة عن إرادتك.
                                علاوة على ذلك ، ألتزم بموجب هذا بأنني سأستلم السيارة من المر
                                آب في غضون أسبوع واحد ، بعد أن تكون السيارة جاهزة للتحصيل ،
                                وإذا لم يكن الأمر كذلك ، فأنا أوافق على دفع ما بين 2.R.O إلى 5 ريال عماني في اليوم مقابل رسوم وقوف السيارات دون أي مسؤولية عليك تجاه السيارة. أدرك تمامًا أن الشركة تحتفظ بالحق في التصرف في السيارة وتعديل العائدات مقابل المستحقات المعلقة لتسويتها إذا لم يتم تحصيل السيارة خلال الفترة المحددة والموافقة على جميع الشروط المطبوعة في الجزء الخلفي من المستند.</span>
                        </div>
                    </div>
                    <hr />

                    <div className="row mt-2">
                        <div className="col-md-3">
                            <div className='d-flex'>
                                <div>
                                    <img style={{objectFit: 'contain'}} src={Dummy} alt="" width={130} height={100} />
                                </div>
                                <div className='ms-2'>
                                    <div className='sign-img text-center m-auto border border-1 d-flex'>
                                        <img src={Signature} alt="signature" className='objcet-fit-contain m-auto' />
                                    </div>
                                    <div className='text-center'><small>Customer's Signature</small></div>
                                </div>
                            </div>

                            <div style={{ fontSize: '13px' }}>
                               
                                <div className='mt-3'>
                                    <small>SERVICE APPOINTMENTS : 24500502</small>
                                    <small>24 HOURS RECOVERY : 80077979</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <span>
                                        <Form.Select className=''>
                                            <option value="1">Mohammed Raiyan</option>
                                            <option value="2">Mohammed Tahir</option>
                                            <option value="3">Bilal Ahmed</option>
                                            <option value="3">Sufwan Mohammed</option>
                                        </Form.Select>
                                        <div>
                                            <small className='ms-2'>Ph No. : 98058853, 24500531</small>
                                        </div>
                                    </span>
                                </div>
                                <div className="col-md-4">
                                    <span>
                                        <div className='d-flex'>
                                            <div className='sign-img text-center m-auto border border-1 d-flex'>
                                                <img src={Signature} alt="signature" className='objcet-fit-contain m-auto' />
                                            </div>
                                        </div>
                                        <div className='text-center'><small>Service Advisor</small></div>
                                    </span>
                                </div>

                            </div>
                            <footer className='text-end mt-4'>
                                <Button className='mx-2' variant="btn btn-outline-dark" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="dark" onClick={handleClose}>
                                    Submit
                                </Button>
                            </footer>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default CustomerConfirmationModal;