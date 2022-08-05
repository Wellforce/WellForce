import React from 'react'
import MatchCard from './Matches/MatchCard';

export default function MatchGrid({}) {
  return (
    <div>MatchGrid
        <Grid container/>
    <Grid item xs={6}>
      <MatchCard />
    </Grid>
    <Grid item xs={6}>
      <MatchCard />
    </Grid>
    <Grid item xs={6}>
      <MatchCard />
    </Grid>
    <Grid item xs={6}>
      <MatchCard />
    </Grid>
  
    </div>
  )
}
