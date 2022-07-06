import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { useGetJobsLazyQuery } from "./graphql/getJobs.generated";

export const Main: React.FC = () => {
    const [getData, { data, loading }] = useGetJobsLazyQuery();

    useEffect(() => {
        getData();
    }, [getData]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Typography component="h2">
                This data was fetched on the client side (if you disable JavaScript, you should NOT
                see this data)
            </Typography>

            <List>
                {data?.jobs.map((job) => (
                    <React.Fragment key={job.id}>
                        <ListItem button>
                            <ListItemText>{job.title}</ListItemText>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
};
