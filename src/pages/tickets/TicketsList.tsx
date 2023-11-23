import { useMediaQuery, Theme } from '@mui/material';
import {
    Datagrid,
    List,
    TextField,
    Button,
    WithRecord
} from 'react-admin';
import TicketsEditEmbedded from './TicketsEditEmbedded';
import QRCode from "react-qr-code";
import reactLogo from './../../assets/Ticket.svg'
import '../../app/App.css'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';


const TicketsList = () => {

    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const ticket = (id: number) => {

        const ticketNo = id.toString().length === 1 ? '0' + id : id



        console.log('I was here!')

                // @ts-ignore
                savePDF(contentArea.current, { paperSize: "A4" });

                console.log('I was here!')

    }

    return (
        <List
            sort={{ field: 'usageStatus', order: 'ASC' }}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    optimized
                    bulkActionButtons={false}  
            >
                <TextField source="id" />
                <TextField source="paymentStatus" />
                <WithRecord label="Download" render={record => record.paymentStatus === 'SOLD' ? (<Button type='submit' onClick={() => ticket(record.id)}  label='Download'/>) : null} />
            
            <div>
                <div className="app-content" ref={contentArea}>
                    <PDFExport ref={pdfExportComponent} paperSize="A4">
                        <div>
                            <div className={"ticket"}>
                                <img src={reactLogo} className="logo react" alt="Christmas Ticket"/>
                                <div className={"ticket-number"}>No. 0000 00</div>
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

            </Datagrid>
            ) : (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    optimized
                    bulkActionButtons={false}  
                >
                    <TextField source="id" />
                    <TextField source="paymentStatus" />
                    <TextField source="usageStatus" />
                    <TextField source="type" />
                    <TextField source="price" />
                    <WithRecord label="Download" render={record => record.paymentStatus === 'SOLD' ? (<Button onClick={() => ticket(record.id)}  label='Download'/>) : null} />
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;

