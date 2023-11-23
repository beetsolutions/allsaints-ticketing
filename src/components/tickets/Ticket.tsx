import QRCode from "react-qr-code";
import double from './../../assets/double.jpg'
import single from './../../assets/single.jpg'
import '../../app/App.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';
import { useParams } from "react-router-dom";

function Ticket() {
    const contentArea = useRef(null);
    const { id, type } = useParams();

    const logo = type === 'SINGLE' ? single : double
    
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
                            <img src={logo} style={{width: '100%'}} alt="Ticket Background"/>
                                <div className={"ticket-number"}>No. 0000 00{ticketNo}</div>
                            </div>

                        <div className={"ticket-qr-code"}>
                            <QRCode
                                className={"qr-code"}
                                value={"Ticket number: "  + " is: " }
                            />
                        </div>
                    </div>
                </PDFExport>
            </div>
        </>
    )
}

export default Ticket
