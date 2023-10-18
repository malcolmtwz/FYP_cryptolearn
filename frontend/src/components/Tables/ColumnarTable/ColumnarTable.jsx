import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, IconButton, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import './ColumnarTable.css'

function ColumnarTable() {
    const [rows, setRows] = useState(4);
    const [columns, setColumns] = useState(4);
    const [data, setData] = useState(Array(4).fill(Array(4).fill('')));

    const handleChange = (row, col, value) => {
        const newData = [...data];
        newData[row][col] = value;
        setData(newData);
    };

    const handleAddRow = () => {
        setRows(rows + 1);
        setData([...data, Array(columns).fill('')]);
    };

    const handleRemoveRow = () => {
        if (rows > 1) {
            setRows(rows - 1);
            setData(data.slice(0, -1));
        }
    };

    const handleAddColumn = () => {
        setColumns(columns + 1);
        setData(data.map(row => [...row, '']));
    };

    const handleRemoveColumn = () => {
        if (columns > 1) {
            setColumns(columns - 1);
            setData(data.map(row => row.slice(0, -1)));
        }
    };

    return (
        <div className='columnar-accordian-container'>
        <Accordion defaultExpanded={false}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography>Columnar Transposition Table</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <div style={{ marginBottom: '10px' }}>
                        <IconButton onClick={handleAddRow}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={handleRemoveRow}>
                            <RemoveIcon />
                        </IconButton>
                        Rows: {rows}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <IconButton onClick={handleAddColumn}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={handleRemoveColumn}>
                            <RemoveIcon />
                        </IconButton>
                        Columns: {columns}
                    </div>

                    <Table>
                        <TableHead>
                            <TableRow>
                                {Array.from({ length: columns }).map((_, index) => (
                                    <TableCell key={index}>Column {index + 1}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell, colIndex) => (
                                        <TableCell key={colIndex}>
                                            <TextField
                                                value={cell}
                                                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                                inputProps={{ maxLength: 1 }}
                                                variant="outlined"
                                                size="small"
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}

export default ColumnarTable;
