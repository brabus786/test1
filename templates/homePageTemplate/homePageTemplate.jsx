import React, { useEffect } from 'react';
import styles from './HomePageTemplate.module.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { UserAPI } from '../../UTILS/api';
import { fetchUsers } from '../../store/actions/fetchUser';
import { useDispatch } from 'react-redux';


const HomePageTemplate = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers(1));
    },[]);

    return (
        <div className={styles.HomePageTemplate}>
            <Container>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xl={4}>
                        <span>1</span>
                    </Grid>
                    <Grid item xl={4}>
                        <span>1</span>
                    </Grid>
                    <Grid item xl={4}>
                        <span>1</span>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomePageTemplate;
