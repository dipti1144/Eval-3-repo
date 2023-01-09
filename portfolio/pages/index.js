
import { Box, Grid } from '@chakra-ui/react'
import Head from 'next/head'
import Educationcart from '../components/educationcart'
import Profilecart from '../components/profilecart'
import Project from '../components/project'
import styles from '../styles/Home.module.css'


export const user={
  "login": "dipti1144",
  "id": 105965074,
  "node_id": "U_kgDOBlDmEg",
  "avatar_url": "https://avatars.githubusercontent.com/u/105965074?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dipti1144",
  "html_url": "https://github.com/dipti1144",
  "followers_url": "https://api.github.com/users/dipti1144/followers",
  "following_url": "https://api.github.com/users/dipti1144/following{/other_user}",
  "gists_url": "https://api.github.com/users/dipti1144/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dipti1144/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dipti1144/subscriptions",
  "organizations_url": "https://api.github.com/users/dipti1144/orgs",
  "repos_url": "https://api.github.com/users/dipti1144/repos",
  "events_url": "https://api.github.com/users/dipti1144/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dipti1144/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dipti",
  "company": "Masai School",
  "blog": "dipti1144.github.io",
  "location": "Delhi",
  "email": null,
  "hireable": null,
  "bio": "An Aspiring full-stack web developer, Started My Coding Journey with Masai School with a 9-9-6 curriculum.",
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 151,
  "following": 197,
  "created_at": "2022-05-21T06:53:32Z",
  "updated_at": "2023-01-04T09:14:21Z"
}

export default function Home({projects}) {
  return (
   <div>
     <Head>
      <title>portfolio</title>
     </Head>
     <main className={styles.main} >
         <Box>
            <Grid templateColumn={{
              base: "repear(1,1fr)",
              md: "repeat(2, 30% 70%)",
              lg: "repeat(3, 30%,70%)",
            }} >

              <Profilecart {...user} />
              <Grid>
                <Project {...projects} />
                <Educationcart {...user} />
              </Grid>

            </Grid>
         </Box>
     </main>
   </div>
  )
}

export const getStaticProps=async()=>{
  let res=await fetch(`https://api.github.com/search/repositories?q=user:dipti1144+fork:true&sort=updated&per_page=10&type=Repositories`)
  let data= await res.json();
  return {
    props: {
      projects: data
    }
  }
}
