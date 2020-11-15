import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import myImage from './back.jpg';
import imgMyimageexample from './back1.jpg';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: '50px',
    minHeight: '10px',
  },
  container: {
    width: "auto",
    marginLeft: "0px",
    marginRight: "0px",
    marginTop: "100px",
    // padding: "0px",
  },
}));

const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
};

const behindForm = {
  backgroundImage: `url(${myImage})`,
  zIndex: 5,
}

export default function CheckboxesGroup() {
  const classes = useStyles();
  // let toxic = 0;
  // let support = 0;
  // let tryHard = 0;
  const [toxic, setToxic] = React.useState(0);
  const [support, setSupport] = React.useState(0);
  const [tryHard, setTryHard] = React.useState(0);
  const [result, setResult] = React.useState('');

  const [state, setState] = React.useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
    q10: false,
    q11: false,
    q12: false,
    q13: false,
    q14: false,
    q15: false,
    q16: false,
    q17: false,
    q18: false,
    q19: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log()
    let name = event.target.name.replace(/[a-z]/g, '')
    console.log(name)
    if(name === '1')
      setToxic(toxic + 1);
    if(name === '2')
      setSupport(support + 1);
    if(name === '3'){
      setTryHard(tryHard + 1);
      setToxic(toxic + 1);
    }
    if(name === '4'){
      setTryHard(tryHard - 1)
    }
    if(name === '5'){
      setTryHard(tryHard -1)
    }
    if(name === '6'){
      setToxic(toxic + 1);
      setTryHard(tryHard- 1);
    }
    if(name === '7'){
    }
    if(name === '8'){
      setTryHard(tryHard - 1)
    }
    if(name === '9'){
      setTryHard (tryHard + 1)
    }
    if(name === '10'){
      setSupport(support + 1)
    }
    if(name === '11'){
      setSupport(support + 1)
      setTryHard(tryHard + 1)
    }
    if(name === '12'){
      setToxic(toxic + 1)
      setTryHard(tryHard + 1)
    }
    if(name === '13'){
      setTryHard(tryHard - 5)
    }
    if(name === '14'){
    }
    if(name === '15'){
      setSupport(support - 1)
    }
    if(name === '16'){
      setSupport(support - 1)
    }
    if(name === '17'){
      setToxic(toxic + 1)
    }
    // console.log('yeh')
  };

  const handleButton=()=>{
    console.log('toxic', toxic)
    console.log('support', support)
    console.log('tryHard', tryHard)
    let max = Math.max(toxic, tryHard, support);
    let tox = max === toxic;
    let t = max === tryHard;
    let sup = max === support;
    setResult(`You're a try hard support valorant player`)
  }

  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15,q16,q17} = state;
  const error = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <div className="cComponent" style={divStyle} >
        <Grid container className={classes.container} spacing={0} direction="column" alignItems="center" justify="center">
        <div style={behindForm}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">check the box if the statement applies to you</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={q1} onChange={handleChange} name="q1" />}
            label="I've been voice banned before"
          />
          
          <FormControlLabel
            control={<Checkbox checked={q2} onChange={handleChange} name="q2" />}
            label="I always fill what is needed to make a good team comp"
          />

          <FormControlLabel
            control={<Checkbox checked={q3} onChange={handleChange} name="q3" />}
            label="I instalock my main agent to carry my team"
          />

          <FormControlLabel
            control={<Checkbox checked={q4} onChange={handleChange} name="q4" />}
            label="I have afked a rank game before"
          />

          <FormControlLabel
            control={<Checkbox checked={q5} onChange={handleChange} name="q5" />}
            label="I don't use my mic often"
          />

          <FormControlLabel
            control={<Checkbox checked={q6} onChange={handleChange} name="q6" />}
            label="I have trolled my team"
          />
          <FormControlLabel
            control={<Checkbox checked={q7} onChange={handleChange} name="q7" />}
            label="breach and I attacking from showers on bind. blind peaking is better because it will catch the enemy off guard. flashing is the wrong move."
          />

          <FormControlLabel
            control={<Checkbox checked={q8} onChange={handleChange} name="q8" />}
            label="I play ranked over normals even when drunk or high"
          />
          <FormControlLabel
            control={<Checkbox checked={q9} onChange={handleChange} name="q9" />}
            label="I train in aim labs and warm up before playing"
          />
          <FormControlLabel
            control={<Checkbox checked={q10} onChange={handleChange} name="q10" />}
            label="I think teamwork is the most important part of the game"
          />
          <FormControlLabel
            control={<Checkbox checked={q11} onChange={handleChange} name="q11" />}
            label="Winning is the most important part of ranked. frags don't matter"
          />
          <FormControlLabel
            control={<Checkbox checked={q12} onChange={handleChange} name="q12" />}
            label="Winning comes before anything in ranked, feelings don't matter"
          />
          <FormControlLabel
            control={<Checkbox checked={q13} onChange={handleChange} name="q13" />}
            label="I would/do use drugs to increase my focus during game"
          /> 
          <FormControlLabel
            control={<Checkbox checked={q14} onChange={handleChange} name="q14" />}
            label="I tell my team mates when I smurf so they know I can carry"
          /> 
          <FormControlLabel
            control={<Checkbox checked={q15} onChange={handleChange} name="q15" />}
            label="I tell my team mates when I smurf so they know I can carry"
          /> 
          <FormControlLabel
            control={<Checkbox checked={q16} onChange={handleChange} name="q16" />}
            label="I think aim is the most important part of the game"
          />
          <FormControlLabel
            control={<Checkbox checked={q17} onChange={handleChange} name="q17" />}
            label="I've been accused of being toxic"
          />

        </FormGroup>
        <FormHelperText>You're all done. Click here to get your results</FormHelperText>
        {' '} 
        {result} 
        {' '} 
        <Button variant="contained" color="secondary" onClick={handleButton}>
          calculate
        </Button>
      </FormControl>
      </div>
      </Grid>
      </div>
    </div>
  );
}