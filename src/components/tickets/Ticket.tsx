import QRCode from "react-qr-code";
import reactLogo from './../../assets/Ticket.svg'
import '../../app/App.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Ticket() {

    const { id } = useParams();
    
     // @ts-ignore
    const ticketNo = id.toString().length === 1 ? '0' + id.toString() : id.toString()



    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const onPdfExport = () => {
        // @ts-ignore
        savePDF(contentArea.current, { paperSize: "A4" });
    }

    const onSave = () => {
        // @ts-ignore
        pdfExportComponent.current.save()
    }

    return (
        <>
                    <div id={"content-area"} className="app-content" ref={contentArea}>
                        <PDFExport ref={onSave} paperSize="A4">
                            <div>
                                <div className={"ticket"}>
                                    <img src={reactLogo} className="logo react" alt="Christmas Ticket"/>
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
                    <div className="button-area">
                        <button onClick={onPdfExport}>Download</button>
                    </div>

        </>
    )
}

export default Ticket

export interface TicketProps {
    id: number;
}
