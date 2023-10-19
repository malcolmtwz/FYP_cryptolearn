import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const AccordionComponent = ({ title, children }) => (
    <Accordion style={{ marginTop: '2%',  overflow: 'visible' }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
            id="panel-header"
        >
            <Typography variant='subtitle'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'block', overflow: 'visible' }}>
            {children}
        </AccordionDetails>
    </Accordion>
);

export default AccordionComponent;
