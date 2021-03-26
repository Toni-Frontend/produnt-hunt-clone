import React from 'react';
import FormPostJob from '../components/forms/FormPostjob';
import Banner from '../components/Jobs/Banner';
import Layout from '../components/layout/Layout';

const PostJob = () => {
    return ( 
        <Layout>
            <Banner/>
            <div className="container c-post-job">
                <FormPostJob/>
            </div>
        </Layout>
     );
}
 
export default PostJob;