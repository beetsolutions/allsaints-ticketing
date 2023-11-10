import QRCode from "react-qr-code";
import { PDFExport } from '@progress/kendo-react-pdf';
import reactLogo from './../../assets/Ticket.svg'
import './../../App.css'

function Ticket() {

    return (
        <>
            <div>
                <div className="app-content">
                    <PDFExport paperSize="A4">
                        <div>
                            <div className={"ticket"}>
                                <img src={reactLogo} className="logo react" alt="Christmas Ticket"/>
                                <div className={"ticket-number"}>No. 0000 0062</div>
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