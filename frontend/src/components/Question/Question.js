// Question.js
import React, { useState } from 'react';
import {
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
} from '@mui/material';

const Question = ({ questionData, questionNumber, onAnswer, onHint, onSkip }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
  const [hintDialogOpen, setHintDialogOpen] = useState(false);

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === questionData.answer.toLowerCase()) {
      const points = hintUsed ? 0.5 : 1;
      onAnswer(points);
      setSubmitDialogOpen(true);
    } else {
      setSubmitDialogOpen(true);
    }
  };

  const handleHint = () => {
    setHintDialogOpen(true);
  };

  const handleCloseSubmitDialog = () => {
    setSubmitDialogOpen(false);
  };

  const handleCloseHintDialog = () => {
    setHintDialogOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Question {questionNumber + 1}</Typography>
        <Typography variant="h5">{questionData.question}</Typography>
        <Typography variant="body1">
          {hintUsed ? questionData.hint : questionData.encryptedText}
        </Typography>
        <TextField
          label="Your Answer"
          variant="outlined"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Tooltip title="Submit Answer">
          <Button variant="contained" color="primary" onClick={handleAnswer}>
            Submit
          </Button>
        </Tooltip>
        <Tooltip title="Get Hint">
          <Button variant="contained" color="info" onClick={handleHint}>
            Hint
          </Button>
        </Tooltip>
        <Button variant="contained" color="secondary" onClick={() => onSkip()}>
          Skip
        </Button>
      </CardActions>

      
      <Dialog open={submitDialogOpen} onClose={handleCloseSubmitDialog}>
        <DialogTitle>Submission Result</DialogTitle>
        <DialogContent>
          {userAnswer.toLowerCase() === questionData.answer.toLowerCase() ? (
            <Typography variant="body1">Correct answer! You earned points.</Typography>
          ) : (
            <Typography variant="body1">Incorrect answer. Try again.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSubmitDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={hintDialogOpen} onClose={handleCloseHintDialog}>
        <DialogTitle>Hint</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{questionData.hint}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseHintDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Question;
