import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AndroidIcon from '@mui/icons-material/Android';
import LoopIcon from '@mui/icons-material/Loop';
import TranslateIcon from '@mui/icons-material/Translate';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Tooltip from '@mui/material/Tooltip';

const data=[
 {text : 'Logic', ICON :  <AndroidIcon />},
 {text : 'Loop', ICON :  <LoopIcon />},
 {text : 'Maths', ICON :  'a*b'},
 {text : 'Text', ICON :  <TranslateIcon />},
 {text : 'List', ICON :  <FormatListNumberedIcon />},
 {text : 'Dictionary', ICON :  <LibraryBooksIcon />},
 {text : 'Set', ICON :  '{1,2...}'},
 {text : 'Tuple', ICON :  <CodeIcon />},
 {text : 'Color', ICON :  <ColorLensIcon />},
 {text : 'Variable', ICON :  <TrendingUpIcon />},
 {text : 'Function', ICON :  '=>(){}'},
 {text : 'Conversions', ICON :  <BuildIcon />},
 {text : 'Code Segment', ICON :  <DeveloperModeIcon />},
 {text : 'Time', ICON :  <AccessTimeFilledIcon />}
];

export const mainListItems = (
  <div id="mainListItems1">
   {data.map((item)=>{
     return (
      <Tooltip title={item.text} placement="right" key={item.text}>
      <ListItem button style={{backgroundColor : 'rgb(5, 30, 52)'}}>
        <ListItemIcon style={{color : 'rgba(255,255,255,.8)'}}>
         {item.ICON}
        </ListItemIcon>
        <ListItemText primary={item.text} style={{color : 'rgba(255,255,255,.8)'}}/>
        </ListItem>
  </Tooltip>
     );
   })}
  </div>
);
