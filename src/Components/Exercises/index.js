import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    overflowY: "auto"
  }
};

const Exercises = ({
  exercises,
  category,
  onSelect,
  // Default Values
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise"
  }
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(
            ([group, exercises]) =>
              (!category || category === group) && (
                <Fragment>
                  <Typography
                    key={group}
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>

                  <List component="ul">
                    {exercises.map(({ id, title }) => (
                      <ListItem key={id} button onClick={() => onSelect(id)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              )
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
