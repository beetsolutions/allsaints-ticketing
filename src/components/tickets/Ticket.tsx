import QRCode from "react-qr-code";
import double from './../../assets/double.jpg'
import single from './../../assets/single.jpg'
import table5 from './../../assets/table5.jpg'
import godfather from './../../assets/godfather.jpg'
import '../../app/App.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';
import { useParams } from "react-router-dom";

function Ticket() {
    const contentArea = useRef(null);
    const { id, type } = useParams();

    let image
    if (type === 'SINGLE') {
        image = single
    } else if (type === 'DOUBLE') {
        image = double
    }
    else if (type === 'GOD_FATHER') {
        image = godfather
    }
    else {
        image = table5
    }
    
     // @ts-ignore
    const ticketNo = id.toString().length === 1 ? '0' + id.toString() : id.toString()

    const onPdfExport = () => {
        // @ts-ignore
        savePDF(contentArea.current, { paperSize: "A4", fileName:  ticketNo});
    }

    return (
        <>
            <div className="button-area" style={{width: '100%', height: '200', background: '#eee', padding: '20'}}>
                <button onClick={onPdfExport} style={{width: '200', background: '#eee', marginTop: '20px', padding: '10px'}}>Download</button>
            </div>
            <div id={"content-area"} ref={contentArea} style={{width: '100%', height: '100%', background: '#eee'}}>
                <PDFExport paperSize="A4">
                    <div >
                        <div className={"ticket"}>
                            <img src={image} style={{width: '100%'}} alt="Ticket Background"/>
                                <div className={"ticket-number"}>No. 0000 00{ticketNo}</div>
                            </div>

                        <div className={"ticket-qr-code"}>
                            <QRCode
                                className={"qr-code"}
                                value={"https://beetsolutions.github.io/allsaints-ticketing/#/tickets/" + id}
                            />
                        </div>


                        <div className={"ticket-qr-code-pdf"}>
                            <QRCode
                                className={"qr-code"}
                                value={"https://beetsolutions.github.io/allsaints-ticketing/#/tickets/" + id}
                                size={40}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                viewBox={`0 0 40 40`}
                            />
                        </div>
                        
                    </div>
                </PDFExport>
            </div>
        </>
    )
}

export default Ticket
