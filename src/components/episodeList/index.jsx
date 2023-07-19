import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    float: 'right', 
  },
  episodeNum: {
    margin: 2, 
  },
};

const EpisodeList = ( { episodes } ) => {

  

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper',  }}>
        {episodes.map((e, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <div>
                <ListItemText
                  sx={styles.episodeNum}
                  primary={e.episode_number}
                />
              </div>
              <ListItemText
                primary={
                  <>
                    {e.name} 
                    <Chip sx={styles.chipLabel} label={e.vote_average} />
                    <Chip sx={styles.chipLabel} icon={<CalendarMonthIcon />} label={e.air_date} />
                    <Chip sx={styles.chipLabel} icon={<AccessTimeIcon />} label={`${e.runtime} min`} />
                  </>
                }
                secondary={e.overview}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>

 
  );
};
export default  EpisodeList ;