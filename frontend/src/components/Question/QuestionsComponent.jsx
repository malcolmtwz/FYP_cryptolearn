import React, { useState } from 'react';
import { Button, CardActions, CardContent, Container, Typography, Card, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';

const QuestionsComponent = ({
  currentQuestion,
  questions,
  onAnswer,
  onSkip,
}) => {

    console.log('currentQuestion:', currentQuestion);
    console.log('questions:', questions);
    console.log('answer to current question',questions.answer)


    const [userAnswer, setUserAnswer] = useState('');
    const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
    const [hintDialogOpen, setHintDialogOpen] = useState(false);
    const [onCorrectAnswer, setCorrectanswer] = useState(false);
    const [hintUsed, setHintUsed] = useState(false);

    const handleAnswer = () => {
        console.log('userAnswer:', userAnswer);
        console.log('correctAnswer:', questions.answer);

        const points = hintUsed ? 0.5 : 1;
        if (userAnswer.toLowerCase() === questions.answer.toLowerCase()) {
            onAnswer(points);
            setCorrectanswer(true);
        }
        setSubmitDialogOpen(true);
    };

    const handleHint = () => {
        setHintUsed(true);
        setHintDialogOpen(true);
    }

    const handleCloseSubmitDialog = () => {
        if (onCorrectAnswer){
            setUserAnswer('');
            setCorrectanswer(false);
        }
        setSubmitDialogOpen(false);
      };
    
    const handleCloseHintDialog = () => {
        setHintDialogOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            handleAnswer();
        }
    }


  return (
    <Card>
        <CardContent>
            <Typography variant="h6">Question {currentQuestion + 1}</Typography>
            <Typography variant="h5">{questions.question}</Typography>

            <TextField
                label="Your Answer"
                variant="outlined"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </CardContent>
        <CardActions>
            <Button variant='contained' color='primary' onClick={handleAnswer}>
                Submit Answer
            </Button>
            <Button variant='outlined' color='secondary' onClick={handleHint}>
                Request Hint
            </Button>
            <Button variant='outlined' onClick={onSkip}>
                Skip Question
            </Button>
        </CardActions>

        <Dialog open={submitDialogOpen} onClose={handleCloseSubmitDialog}>
            <DialogTitle>Submission Result</DialogTitle>
            <DialogContent>
                {onCorrectAnswer ? (
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
                <Typography variant="body1">{questions.hint}</Typography>
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

export default QuestionsComponent;
