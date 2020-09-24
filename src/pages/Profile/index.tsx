import React from 'react';

import { RepoIcon, Container, Main, LeftSide, RightSide, Tab, Repos, CalendarHeading } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">20</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <TabContent />
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={'kelisonrosendo'}
            name={'Kélison Rosendo'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/54515007?s=400&v=4'}
            followers={1}
            following={2}
            company={'Nome da empresa'}
            location={'Ipatinga - MG'}
            email={'meuemail@gmail.com'}
            blog={'linkedin.com/in/kelisonrosendo'}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'kelisonrosendo'}
                  reponame={'youtube-teste'}
                  description={'Contain all projects'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={5}
                  forks={3}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;