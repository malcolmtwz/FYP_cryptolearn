import React, { useState, useEffect, useContext  } from 'react';
import { Button, CardActions, CardContent, Container, Typography, Card, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import CipherContext from '../../screens/FinalQuizScreen/CipherContext';

const FinalQuestionsComponent = ({
  currentQuestion,
  questions,
  onAnswer,
  onSkip
}) => {

    console.log('currentQuestion:', currentQuestion);
    // console.log('questions:', questions);
    console.log('answer to current question',questions.answer)

    const [userAnswer, setUserAnswer] = useState('');
    const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
    const [hintDialogOpen, setHintDialogOpen] = useState(false);
    const [onCorrectAnswer, setCorrectanswer] = useState(false);
    const [hintsUsed, setHintsUsed] = useState(0);
  
    
    const handleAnswer = () => {
        // Check if the answer is correct
        if (userAnswer.toLowerCase() === questions.answer.toString().toLowerCase()) {
            // Pass whether a regular hint was used and that the answer is correct
            onAnswer(userAnswer, hintsUsed > 0, true); 
            setCorrectanswer(true);
            setSubmitDialogOpen(true);
            setHintDialogOpen(false);
        } else {
            // Pass that the answer is incorrect
            onAnswer(userAnswer, hintsUsed > 0, false);
            setSubmitDialogOpen(true);
        }
        
        // Reset hint count for the next question
        setHintsUsed(0);

    };

    const handleHintRequest = () => {
        setHintsUsed(hintsUsed + 1);
        setHintDialogOpen(true); // Open the hint dialog for regular hints
    };


    const handleCipherHintRequest = () => {
        setHintsUsed(hintsUsed + 1);
    };

    const handleCloseSubmitDialog = () => {
        if (onCorrectAnswer){
            setUserAnswer('');
            setTimeout(() => { //TODO: issue with this being too fast, and a incorrect dialog will appear after submiting a correct answer
                setCorrectanswer(false);
            }, 100);
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
            <Button variant='outlined' color='secondary' onClick={handleHintRequest}>
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

export default FinalQuestionsComponent;
