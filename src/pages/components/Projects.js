import React from "react";
import {
   Container,
   Typography,
   Grid,
   Card,
   CardActionArea,
   CardContent,
   CardMedia,
} from "@material-ui/core";

const projectData = [
   {
      title: "Project 1",
      description: "A brief description of Project 1",
      image: "https://via.placeholder.com/150",
   },
   {
      title: "Project 2",
      description: "A brief description of Project 2",
      image: "https://via.placeholder.com/150",
   },
   // Add more projects here
];

const Projects = () => {
   return (
      <Container>
         <Typography variant="h3" component="h1" gutterBottom>
            Projects
         </Typography>
         <Grid container spacing={3}>
            {projectData.map((project, index) => (
               <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                     <CardActionArea>
                        <CardMedia
                           component="img"
                           alt={project.title}
                           height="140"
                           image={project.image}
                           title={project.title}
                        />
                        <CardContent>
                           <Typography gutterBottom variant="h5" component="h2">
                              {project.title}
                           </Typography>
                           <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                           >
                              {project.description}
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default Projects;
