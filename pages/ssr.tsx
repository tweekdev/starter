import type { NextPage } from "next";
import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";

import {
    GetJobsSsrDocument,
    GetJobsSsrQuery,
} from "../components/ssr/graphql/getJobsSSR.generated";
import { Main } from "../components/ssr/Main";
import client from "../lib/apollo";

const SSRPage: NextPage<{ jobs: GetJobsSsrQuery["jobs"] }> = ({ jobs }) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography textAlign="center" component="h1">
                    SSR (left) - Client Side Rendering (right)
                </Typography>
            </Grid>
            <Grid item xs={6} style={{ backgroundColor: "lightblue" }}>
                <Typography component="h2">
                    This data was fetched on the server side (if you disable JavaScript, you should
                    still see this data)
                </Typography>

                <List>
                    {jobs.map((job) => (
                        <React.Fragment key={job.id}>
                            <ListItem button>
                                <ListItemText>{job.title}</ListItemText>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Grid>
            <Grid item xs={6}>
                <Main />
            </Grid>
        </Grid>
    );
};

export async function getServerSideProps() {
    const { data } = await client.query({
        query: GetJobsSsrDocument,
    });

    return {
        props: {
            jobs: data.jobs,
        },
    };
}

export default SSRPage;
