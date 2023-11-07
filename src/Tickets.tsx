import QRCode from "react-qr-code";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import reactLogo from './assets/Ticket.svg'
import './App.css'
import { useRef } from 'react';
import App from "./App";

function Tickets() {
    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const onPdfExport= (event) => {
        savePDF(contentArea.current, { paperSize: "A4" });
    }

    const tickets = [
        {
            number: "No. 0000 0001",
            status: "VALID"
        },
        {
            number: "No. 0000 0002",
            status: "VALID"
        },
        {
            number: "No. 0000 0003",
            status: "VALID"
        },
        {
            number: "No. 0000 0004",
            status: "VALID"
        },
        {
            number: "No. 0000 0005",
            status: "VALID"
        },
        {
            number: "No. 0000 0006",
            status: "VALID"
        },
        {
            number: "No. 0000 0007",
            status: "VALID"
        },
        {
            number: "No. 0000 0008",
            status: "VALID"
        },
        {
            number: "No. 0000 0009",
            status: "VALID"
        },
        {
            number: "No. 0000 0010",
            status: "VALID"
        },
        {
            number: "No. 0000 0011",
            status: "VALID"
        },
        {
            number: "No. 0000 0012",
            status: "VALID"
        },
        {
            number: "No. 0000 0013",
            status: "VALID"
        },
        {
            number: "No. 0000 0014",
            status: "VALID"
        },
        {
            number: "No. 0000 0015",
            status: "VALID"
        },
        {
            number: "No. 0000 0016",
            status: "VALID"
        },
        {
            number: "No. 0000 0017",
            status: "VALID"
        },
        {
            number: "No. 0000 0018",
            status: "VALID"
        },
        {
            number: "No. 0000 0019",
            status: "VALID"
        },
        {
            number: "No. 0000 0020",
            status: "VALID"
        },
        {
            number: "No. 0000 0021",
            status: "VALID"
        },
        {
            number: "No. 0000 0022",
            status: "VALID"
        },
        {
            number: "No. 0000 0023",
            status: "VALID"
        },
        {
            number: "No. 0000 0024",
            status: "VALID"
        },
        {
            number: "No. 0000 0025",
            status: "VALID"
        },
        {
            number: "No. 0000 0026",
            status: "VALID"
        },
        {
            number: "No. 0000 0027",
            status: "VALID"
        },
        {
            number: "No. 0000 0028",
            status: "VALID"
        },
        {
            number: "No. 0000 0029",
            status: "VALID"
        },
        {
            number: "No. 0000 0030",
            status: "VALID"
        },
        {
            number: "No. 0000 0031",
            status: "VALID"
        },
        {
            number: "No. 0000 0032",
            status: "VALID"
        },
        {
            number: "No. 0000 0033",
            status: "VALID"
        },
        {
            number: "No. 0000 0034",
            status: "VALID"
        },
        {
            number: "No. 0000 0035",
            status: "VALID"
        },
        {
            number: "No. 0000 0036",
            status: "VALID"
        },
        {
            number: "No. 0000 0037",
            status: "VALID"
        },
        {
            number: "No. 0000 0038",
            status: "VALID"
        },
        {
            number: "No. 0000 0039",
            status: "VALID"
        },
        {
            number: "No. 0000 0040",
            status: "VALID"
        },
        {
            number: "No. 0000 0041",
            status: "VALID"
        },
        {
            number: "No. 0000 0042",
            status: "VALID"
        },
        {
            number: "No. 0000 0043",
            status: "VALID"
        },
        {
            number: "No. 0000 0044",
            status: "VALID"
        },
        {
            number: "No. 0000 0045",
            status: "VALID"
        },
        {
            number: "No. 0000 0046",
            status: "VALID"
        },
        {
            number: "No. 0000 0047",
            status: "VALID"
        },
        {
            number: "No. 0000 0048",
            status: "VALID"
        },
        {
            number: "No. 0000 0049",
            status: "VALID"
        },
        {
            number: "No. 0000 0050",
            status: "VALID"
        },

        {
            number: "No. 0000 0051",
            status: "VALID"
        },
        {
            number: "No. 0000 0052",
            status: "VALID"
        },
        {
            number: "No. 0000 0053",
            status: "VALID"
        },
        {
            number: "No. 0000 0054",
            status: "VALID"
        },
        {
            number: "No. 0000 0055",
            status: "VALID"
        },
        {
            number: "No. 0000 0056",
            status: "VALID"
        },
        {
            number: "No. 0000 0057",
            status: "VALID"
        },
        {
            number: "No. 0000 0058",
            status: "VALID"
        },
        {
            number: "No. 0000 0059",
            status: "VALID"
        },
        {
            number: "No. 0000 0060",
            status: "VALID"
        },
        {
            number: "No. 0000 0061",
            status: "VALID"
        },
        {
            number: "No. 0000 0062",
            status: "VALID"
        },
        {
            number: "No. 0000 0063",
            status: "VALID"
        },
        {
            number: "No. 0000 0064",
            status: "VALID"
        },
        {
            number: "No. 0000 0065",
            status: "VALID"
        },
        {
            number: "No. 0000 0066",
            status: "VALID"
        },
        {
            number: "No. 0000 0067",
            status: "VALID"
        },
        {
            number: "No. 0000 0068",
            status: "VALID"
        },
    ];

    return (
        <>
            {tickets.map((x, i) =>
                <div key={i}>
                    <div className="app-content" ref={contentArea}>
                        <PDFExport ref={pdfExportComponent} paperSize="A4">
                            <div>
                                <div className={"ticket"}>
                                    <img src={reactLogo} className="logo react" alt="Christmas Ticket"/>
                                    <div className={"ticket-number"}>{x.number}</div>
                                </div>

                                <div className={"ticket-qr-code"}>
                                    <QRCode
                                        className={"qr-code"}
                                        value={"Ticket number: " + x.number + " is: " + x.status}
                                    />
                                </div>
                            </div>
                        </PDFExport>
                    </div>
                    <div className="button-area">
                        <button onClick={onPdfExport}>Download</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Tickets