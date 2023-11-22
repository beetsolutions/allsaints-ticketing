import QRCode from "react-qr-code";
import reactLogo from './../../assets/Ticket.svg'
import '../../app/App.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';

function Ticket(props: TicketProps) {
    const contentArea = useRef(null);

    const ticketNo = props.id.toString().length === 1 ? '0' + props.id : props.id

    // @ts-ignore
    savePDF(contentArea.current, { paperSize: "A4" });


    return (
        <>
            <div>
                <div className="app-content" ref={contentArea}>
                    <PDFExport paperSize="A4">
                        <div>
                            <div className={"ticket"}>
                                <img src={reactLogo} className="logo react" alt="Christmas Ticket"/>
                                <div className={"ticket-number"}>No. 0000 00{ticketNo}</div>
                            </div>

                            <div className={"ticket-qr-code"}>
                                <QRCode
                                    className={"qr-code"}
                                    value={"Ticket number: " + "" + " is: " + "VALID"}
                                />
                            </div>
                        </div>
                    </PDFExport>
                </div>
            </div>
        </>
    )
}

export default Ticket

export interface TicketProps {
    id: number;
}
