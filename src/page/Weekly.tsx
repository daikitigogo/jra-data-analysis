import React from 'react';
import { Card, makeStyles, CardActionArea, CardMedia, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MdiIcon from '../shared/component/MdiIcon';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  },
  image: {
    display: 'block'
  }
}));

const Weekly: React.FC = () => {

  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="m2"
            image="/image/m2.jpg"
            height={140}
            title="m2"
            className={classes.image}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              中山
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MdiIcon path="numeric1CircleOutline" />
                </ListItemIcon>
                <ListItemText primary="呉竹賞" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MdiIcon path="numeric2CircleOutline" />
                </ListItemIcon>
                <ListItemText primary="東雲賞" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MdiIcon path="numeric3CircleOutline" />
                </ListItemIcon>
                <ListItemText primary="アレキサンド" />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Weekly;